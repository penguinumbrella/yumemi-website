import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Hero from './Hero';

// Mock framer-motion
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
  },
}));

describe('Hero Component', () => {
  test('renders main heading', () => {
    render(<Hero />);
    expect(screen.getByText('Yumemi')).toBeInTheDocument();
  });

  test('renders tagline', () => {
    render(<Hero />);
    expect(screen.getByText(/A dreamy mobile world for collaborative roleplay and storytelling/)).toBeInTheDocument();
  });

  test('renders with correct CSS classes', () => {
    render(<Hero />);
    
    const heroSection = screen.getByText('Yumemi').closest('section');
    expect(heroSection).toHaveClass('relative', 'min-h-screen', 'flex', 'items-center', 'justify-center', 'overflow-hidden');
  });

  test('renders animated gradient background', () => {
    render(<Hero />);
    
    // Check for the gradient background div
    const gradientDiv = screen.getByText('Yumemi').closest('section').querySelector('.absolute.inset-0');
    expect(gradientDiv).toBeInTheDocument();
  });

  test('renders content with proper styling', () => {
    render(<Hero />);
    
    const heading = screen.getByText('Yumemi');
    const tagline = screen.getByText(/A dreamy mobile world/);
    
    expect(heading).toHaveClass('text-6xl', 'md:text-8xl', 'font-bold', 'text-white');
    expect(tagline).toHaveClass('text-xl', 'md:text-2xl', 'text-white/90');
  });

  test('renders call-to-action buttons', () => {
    render(<Hero />);
    
    // Look for buttons with common CTA text patterns
    const buttons = screen.getAllByRole('button');
    expect(buttons.length).toBeGreaterThan(0);
  });

  test('renders with responsive design classes', () => {
    render(<Hero />);
    
    const contentDiv = screen.getByText('Yumemi').closest('.relative.z-10');
    expect(contentDiv).toHaveClass('px-6', 'max-w-4xl', 'mx-auto');
  });

  test('renders without console errors', () => {
    const consoleSpy = jest.spyOn(console, 'error').mockImplementation(() => {});
    
    render(<Hero />);
    
    expect(consoleSpy).not.toHaveBeenCalled();
    consoleSpy.mockRestore();
  });

  test('has proper accessibility structure', () => {
    render(<Hero />);
    
    const heading = screen.getByRole('heading', { level: 1 });
    expect(heading).toBeInTheDocument();
    expect(heading).toHaveTextContent('Yumemi');
  });

  test('renders with proper z-index layering', () => {
    render(<Hero />);
    
    const contentDiv = screen.getByText('Yumemi').closest('.relative.z-10');
    const backgroundDiv = contentDiv.parentElement.querySelector('.absolute.inset-0');
    
    expect(contentDiv).toBeInTheDocument();
    expect(backgroundDiv).toBeInTheDocument();
  });
});

