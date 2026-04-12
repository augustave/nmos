import "@testing-library/jest-dom/vitest";

class IntersectionObserver {
  constructor(callback) {
    this.callback = callback;
  }
  observe(el) {
    this.callback([{ isIntersecting: true, target: el }]);
  }
  unobserve() {}
  disconnect() {}
}

globalThis.IntersectionObserver = IntersectionObserver;
