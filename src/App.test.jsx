import { describe, it, expect, afterEach } from "vitest";
import { render, screen, cleanup } from "@testing-library/react";
import App from "./App";

afterEach(cleanup);

describe("App", () => {
  it("renders the hero heading", () => {
    render(<App />);
    expect(screen.getByRole("heading", { level: 1 })).toHaveTextContent(
      "New Media Operating System",
    );
  });

  it("renders swarm node cards", () => {
    const { container } = render(<App />);
    const cards = container.querySelectorAll(".node-card");
    expect(cards.length).toBe(4);
  });

  it("renders the skill browser with 4 skill tabs", () => {
    const { container } = render(<App />);
    const tabs = container.querySelectorAll(".skill-tab");
    expect(tabs.length).toBe(4);
  });

  it("renders the simulation textarea", () => {
    render(<App />);
    expect(screen.getByLabelText(/paste a founder memo/i)).toBeInTheDocument();
  });

  it("renders the navigation", () => {
    const { container } = render(<App />);
    const navLinks = container.querySelectorAll(".nav-link");
    expect(navLinks.length).toBe(5);
  });
});
