#!/usr/bin/env python3

from __future__ import annotations

import re
import sys
from pathlib import Path

try:
    import yaml
except ImportError as exc:  # pragma: no cover
    raise SystemExit("PyYAML is required to run this validator.") from exc


ROOT = Path(__file__).resolve().parent.parent
CATALOG_PATH = ROOT / "catalog.yaml"
FRONT_MATTER_RE = re.compile(r"^---\n(.*?)\n---\n", re.DOTALL)


def load_yaml(path: Path):
    with path.open("r", encoding="utf-8") as handle:
        return yaml.safe_load(handle)


def parse_front_matter(path: Path):
    text = path.read_text(encoding="utf-8")
    match = FRONT_MATTER_RE.match(text)
    if not match:
      raise ValueError("missing valid YAML front matter")
    return yaml.safe_load(match.group(1))


def validate() -> list[str]:
    errors: list[str] = []

    if not CATALOG_PATH.exists():
        return [f"missing catalog: {CATALOG_PATH}"]

    try:
        catalog = load_yaml(CATALOG_PATH)
    except Exception as exc:
        return [f"catalog parse failed: {exc}"]

    contract = catalog.get("canonical_contract", {})
    required_files = contract.get("required_package_files", [])
    required_front_matter = contract.get("required_skill_front_matter_fields", [])

    for skill in catalog.get("skills", []):
        skill_id = skill.get("id", "<unknown>")
        rel_path = skill.get("path")
        if not rel_path:
            errors.append(f"{skill_id}: missing package path")
            continue

        package_path = ROOT / rel_path
        if not package_path.exists():
            errors.append(f"{skill_id}: missing package directory {package_path}")
            continue

        for filename in required_files:
            target = package_path / filename
            if not target.exists():
                errors.append(f"{skill_id}: missing required file {filename}")

        skill_md = package_path / "SKILL.md"
        if skill_md.exists():
            try:
                front_matter = parse_front_matter(skill_md)
            except Exception as exc:
                errors.append(f"{skill_id}: SKILL.md front matter invalid: {exc}")
            else:
                for field in required_front_matter:
                    if field not in front_matter:
                        errors.append(f"{skill_id}: missing front matter field {field}")

        for yaml_name in ("PRD.yaml", "schema.yaml"):
            target = package_path / yaml_name
            if target.exists():
                try:
                    load_yaml(target)
                except Exception as exc:
                    errors.append(f"{skill_id}: {yaml_name} parse failed: {exc}")

    return errors


def main() -> int:
    errors = validate()
    if errors:
        print("Validation failed:")
        for error in errors:
            print(f"- {error}")
        return 1

    print("Validation passed.")
    return 0


if __name__ == "__main__":
    sys.exit(main())
