import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import userEvent from '@testing-library/user-event';
import App from './App';

// Mock components to isolate App testing
jest.mock('./components/layout/Header', () => {
  return function MockHeader() {
    return <div data-testid="header">Header</div>;
  };
});

jest.mock('./components/layout/Footer', () => {
  return function MockFooter() {
    return <div data-testid="footer">Footer</div>;
  };
});

jest.mock('./components/ui/PerformanceMonitor', () => {
  return function MockPerformanceMonitor() {
    return <div data-testid="performance-monitor">Performance Monitor</div>;
  };
});

jest.mock('./components/pages/Home', () => {
  return function MockHome() {
    return <div data-testid="home-page">Home Page</div>;
  };
});

jest.mock('./components/pages/TermsOfService', () => {
  return function MockTermsOfService() {
    return <div data-testid="terms-page">Terms of Service</div>;
  };
});

jest.mock('./components/pages/PrivacyPolicy', () => {
  return function MockPrivacyPolicy() {
    return <div data-testid="privacy-page">Privacy Policy</div>;
  };
});

describe('App Component', () => {
  const renderApp = () => {
    return render(<App />);
  };

  test('renders without crashing', () => {
    renderApp();
    expect(screen.getByTestId('header')).toBeInTheDocument();
    expect(screen.getByTestId('footer')).toBeInTheDocument();
    expect(screen.getByTestId('performance-monitor')).toBeInTheDocument();
  });

  test('renders home page by default', () => {
    renderApp();
    expect(screen.getByTestId('home-page')).toBeInTheDocument();
  });

  test('scrolls to top on route changes', async () => {
    const mockScrollTo = jest.fn();
    Object.defineProperty(window, 'scrollTo', {
      value: mockScrollTo,
      writable: true,
    });

    renderApp();
    
    // Simulate route change
    window.history.pushState({}, '', '/terms');
    window.dispatchEvent(new PopStateEvent('popstate'));
    
    await waitFor(() => {
      expect(mockScrollTo).toHaveBeenCalledWith(0, 0);
    });
  });

  test('has correct routing structure', () => {
    renderApp();
    
    // Check that the app has the correct structure
    expect(screen.getByTestId('header')).toBeInTheDocument();
    expect(screen.getByTestId('footer')).toBeInTheDocument();
    expect(screen.getByTestId('performance-monitor')).toBeInTheDocument();
  });

  test('renders with proper CSS classes', () => {
    renderApp();
    const appElement = screen.getByTestId('home-page').closest('.App');
    expect(appElement).toBeInTheDocument();
  });
});
