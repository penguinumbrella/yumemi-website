// Global test teardown
console.log('Cleaning up test environment...');

// Clean up any global mocks or state
if (global.ResizeObserver) {
  delete global.ResizeObserver;
}

if (global.IntersectionObserver) {
  delete global.IntersectionObserver;
}

// Clean up window mocks
if (window.matchMedia) {
  delete window.matchMedia;
}

if (window.scrollTo) {
  delete window.scrollTo;
}

if (window.requestAnimationFrame) {
  delete window.requestAnimationFrame;
}

if (window.cancelAnimationFrame) {
  delete window.cancelAnimationFrame;
}

if (window.performance) {
  delete window.performance;
}

// Clean up any remaining timers
jest.clearAllTimers();

// Clean up any remaining mocks
jest.clearAllMocks();

console.log('Test environment cleanup complete.');

