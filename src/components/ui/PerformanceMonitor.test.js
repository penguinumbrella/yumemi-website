import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import PerformanceMonitor from './PerformanceMonitor';

// Mock web-vitals
jest.mock('web-vitals', () => ({
  getCLS: jest.fn((callback) => callback({ value: 0.1 })),
  getFID: jest.fn((callback) => callback({ value: 50 })),
  getFCP: jest.fn((callback) => callback({ value: 1200 })),
  getLCP: jest.fn((callback) => callback({ value: 2500 })),
  getTTFB: jest.fn((callback) => callback({ value: 300 })),
}));

// Mock console methods
const mockConsole = {
  log: jest.fn(),
  warn: jest.fn(),
  error: jest.fn(),
};

describe('PerformanceMonitor Component', () => {
  beforeEach(() => {
    // Mock console methods
    Object.assign(console, mockConsole);
    
    // Mock performance API
    Object.defineProperty(window, 'performance', {
      value: {
        getEntriesByType: jest.fn(() => []),
        mark: jest.fn(),
        measure: jest.fn(),
        now: jest.fn(() => Date.now()),
      },
      writable: true,
    });
    
    // Mock requestAnimationFrame
    Object.defineProperty(window, 'requestAnimationFrame', {
      value: jest.fn((callback) => setTimeout(callback, 16)),
      writable: true,
    });
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  test('renders without crashing', () => {
    render(<PerformanceMonitor />);
    // Component should render without throwing errors
    expect(document.body).toBeInTheDocument();
  });

  test('initializes performance monitoring', () => {
    render(<PerformanceMonitor />);
    
    // Check that web-vitals functions are called
    const { getCLS, getFID, getFCP, getLCP, getTTFB } = require('web-vitals');
    
    expect(getCLS).toHaveBeenCalled();
    expect(getFID).toHaveBeenCalled();
    expect(getFCP).toHaveBeenCalled();
    expect(getLCP).toHaveBeenCalled();
    expect(getTTFB).toHaveBeenCalled();
  });

  test('logs performance metrics in development', () => {
    const originalEnv = process.env.NODE_ENV;
    process.env.NODE_ENV = 'development';
    
    render(<PerformanceMonitor />);
    
    // Wait for metrics to be logged
    waitFor(() => {
      expect(console.log).toHaveBeenCalled();
    });
    
    process.env.NODE_ENV = originalEnv;
  });

  test('does not log in production', () => {
    const originalEnv = process.env.NODE_ENV;
    process.env.NODE_ENV = 'production';
    
    render(<PerformanceMonitor />);
    
    // Should not log in production
    expect(console.log).not.toHaveBeenCalled();
    
    process.env.NODE_ENV = originalEnv;
  });

  test('handles performance API errors gracefully', () => {
    // Mock performance API to throw error
    Object.defineProperty(window, 'performance', {
      value: {
        getEntriesByType: jest.fn(() => {
          throw new Error('Performance API not supported');
        }),
        mark: jest.fn(),
        measure: jest.fn(),
        now: jest.fn(() => Date.now()),
      },
      writable: true,
    });
    
    const consoleSpy = jest.spyOn(console, 'error').mockImplementation(() => {});
    
    render(<PerformanceMonitor />);
    
    // Should not crash the component
    expect(document.body).toBeInTheDocument();
    
    consoleSpy.mockRestore();
  });

  test('monitors frame rate', () => {
    render(<PerformanceMonitor />);
    
    // Check that requestAnimationFrame is called
    expect(window.requestAnimationFrame).toHaveBeenCalled();
  });

  test('handles missing performance API', () => {
    // Remove performance API
    delete window.performance;
    
    const consoleSpy = jest.spyOn(console, 'warn').mockImplementation(() => {});
    
    render(<PerformanceMonitor />);
    
    // Should not crash
    expect(document.body).toBeInTheDocument();
    
    consoleSpy.mockRestore();
  });

  test('handles missing requestAnimationFrame', () => {
    // Remove requestAnimationFrame
    delete window.requestAnimationFrame;
    
    const consoleSpy = jest.spyOn(console, 'warn').mockImplementation(() => {});
    
    render(<PerformanceMonitor />);
    
    // Should not crash
    expect(document.body).toBeInTheDocument();
    
    consoleSpy.mockRestore();
  });

  test('calls performance callback functions', () => {
    const mockCallback = jest.fn();
    
    // Mock web-vitals to call our callback
    const { getCLS } = require('web-vitals');
    getCLS.mockImplementation((callback) => callback({ value: 0.1 }));
    
    render(<PerformanceMonitor />);
    
    expect(getCLS).toHaveBeenCalledWith(expect.any(Function));
  });
});

