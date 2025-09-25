import React from 'react';
import { render } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';

// Custom render function that includes router context
export const renderWithRouter = (ui, { route = '/' } = {}) => {
  window.history.pushState({}, 'Test page', route);

  return render(ui, { wrapper: BrowserRouter });
};

// Mock for framer-motion components
export const mockFramerMotion = () => {
  jest.mock('framer-motion', () => ({
    motion: {
      div: ({ children, className, ...props }) => (
        <div className={className} {...props}>
          {children}
        </div>
      ),
      h1: ({ children, className, ...props }) => (
        <h1 className={className} {...props}>
          {children}
        </h1>
      ),
      p: ({ children, className, ...props }) => (
        <p className={className} {...props}>
          {children}
        </p>
      ),
      button: ({ children, className, ...props }) => (
        <button className={className} {...props}>
          {children}
        </button>
      ),
      section: ({ children, className, ...props }) => (
        <section className={className} {...props}>
          {children}
        </section>
      ),
    },
  }));
};

// Mock for Swiper component
export const mockSwiper = () => {
  jest.mock('swiper/react', () => ({
    Swiper: ({ children, ...props }) => (
      <div data-testid="swiper" {...props}>
        {children}
      </div>
    ),
    SwiperSlide: ({ children, ...props }) => (
      <div data-testid="swiper-slide" {...props}>
        {children}
      </div>
    ),
  }));
  
  jest.mock('swiper/modules', () => ({
    Navigation: {},
    Pagination: {},
    Autoplay: {},
  }));
};

// Mock for tsparticles
export const mockTsparticles = () => {
  jest.mock('@tsparticles/react', () => ({
    Particles: ({ children, ...props }) => (
      <div data-testid="particles" {...props}>
        {children}
      </div>
    ),
  }));
  
  jest.mock('@tsparticles/slim', () => ({
    loadSlim: jest.fn(),
  }));
};

// Utility to wait for animations
export const waitForAnimation = () => new Promise(resolve => setTimeout(resolve, 100));

// Utility to mock window methods
export const mockWindowMethods = () => {
  Object.defineProperty(window, 'scrollTo', {
    value: jest.fn(),
    writable: true,
  });
  
  Object.defineProperty(window, 'matchMedia', {
    writable: true,
    value: jest.fn().mockImplementation(query => ({
      matches: false,
      media: query,
      onchange: null,
      addListener: jest.fn(),
      removeListener: jest.fn(),
      addEventListener: jest.fn(),
      removeEventListener: jest.fn(),
      dispatchEvent: jest.fn(),
    })),
  });
};

// Utility to create test data
export const createTestData = {
  user: {
    name: 'Test User',
    email: 'test@example.com',
  },
  screenshots: [
    { id: 1, src: '/test-image-1.jpg', alt: 'Test Image 1' },
    { id: 2, src: '/test-image-2.jpg', alt: 'Test Image 2' },
  ],
};

// Utility to check for accessibility issues
export const checkAccessibility = (container) => {
  // Check for proper heading hierarchy
  const headings = container.querySelectorAll('h1, h2, h3, h4, h5, h6');
  const headingLevels = Array.from(headings).map(h => parseInt(h.tagName.charAt(1)));
  
  // Check for skipped heading levels
  for (let i = 1; i < headingLevels.length; i++) {
    if (headingLevels[i] - headingLevels[i - 1] > 1) {
      console.warn('Skipped heading level detected');
    }
  }
  
  // Check for alt text on images
  const images = container.querySelectorAll('img');
  images.forEach(img => {
    if (!img.alt) {
      console.warn('Image missing alt text:', img.src);
    }
  });
  
  return true;
};

// Utility to mock console methods for testing
export const mockConsole = () => {
  const originalConsole = {
    log: console.log,
    warn: console.warn,
    error: console.error,
  };
  
  const mockConsole = {
    log: jest.fn(),
    warn: jest.fn(),
    error: jest.fn(),
  };
  
  Object.assign(console, mockConsole);
  
  return {
    mockConsole,
    restore: () => Object.assign(console, originalConsole),
  };
};

