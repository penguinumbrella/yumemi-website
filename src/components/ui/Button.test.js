import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Button from './Button';

describe('Button Component', () => {
  const defaultProps = {
    children: 'Click me',
    onClick: jest.fn(),
  };

  test('renders button with text', () => {
    render(<Button {...defaultProps} />);
    expect(screen.getByRole('button', { name: 'Click me' })).toBeInTheDocument();
  });

  test('calls onClick when clicked', async () => {
    const user = userEvent.setup();
    const mockOnClick = jest.fn();
    
    render(<Button {...defaultProps} onClick={mockOnClick} />);
    
    const button = screen.getByRole('button');
    await user.click(button);
    
    expect(mockOnClick).toHaveBeenCalledTimes(1);
  });

  test('renders with custom className', () => {
    render(<Button {...defaultProps} className="custom-class" />);
    
    const button = screen.getByRole('button');
    expect(button).toHaveClass('custom-class');
  });

  test('renders with disabled state', () => {
    render(<Button {...defaultProps} disabled />);
    
    const button = screen.getByRole('button');
    expect(button).toBeDisabled();
  });

  test('does not call onClick when disabled', async () => {
    const user = userEvent.setup();
    const mockOnClick = jest.fn();
    
    render(<Button {...defaultProps} onClick={mockOnClick} disabled />);
    
    const button = screen.getByRole('button');
    await user.click(button);
    
    expect(mockOnClick).not.toHaveBeenCalled();
  });

  test('renders with different variants', () => {
    const { rerender } = render(<Button {...defaultProps} variant="primary" />);
    let button = screen.getByRole('button');
    expect(button).toHaveClass('bg-blue-600', 'hover:bg-blue-700');

    rerender(<Button {...defaultProps} variant="secondary" />);
    button = screen.getByRole('button');
    expect(button).toHaveClass('bg-gray-600', 'hover:bg-gray-700');

    rerender(<Button {...defaultProps} variant="outline" />);
    button = screen.getByRole('button');
    expect(button).toHaveClass('border', 'border-gray-300');
  });

  test('renders with different sizes', () => {
    const { rerender } = render(<Button {...defaultProps} size="sm" />);
    let button = screen.getByRole('button');
    expect(button).toHaveClass('px-3', 'py-1.5', 'text-sm');

    rerender(<Button {...defaultProps} size="lg" />);
    button = screen.getByRole('button');
    expect(button).toHaveClass('px-6', 'py-3', 'text-lg');
  });

  test('renders with loading state', () => {
    render(<Button {...defaultProps} loading />);
    
    const button = screen.getByRole('button');
    expect(button).toBeDisabled();
    expect(button).toHaveClass('opacity-75', 'cursor-not-allowed');
  });

  test('renders with icon', () => {
    const Icon = () => <span data-testid="icon">🚀</span>;
    
    render(<Button {...defaultProps} icon={<Icon />} />);
    
    expect(screen.getByTestId('icon')).toBeInTheDocument();
  });

  test('renders with full width', () => {
    render(<Button {...defaultProps} fullWidth />);
    
    const button = screen.getByRole('button');
    expect(button).toHaveClass('w-full');
  });

  test('handles keyboard events', async () => {
    const user = userEvent.setup();
    const mockOnClick = jest.fn();
    
    render(<Button {...defaultProps} onClick={mockOnClick} />);
    
    const button = screen.getByRole('button');
    button.focus();
    
    await user.keyboard('{Enter}');
    expect(mockOnClick).toHaveBeenCalledTimes(1);
    
    await user.keyboard(' ');
    expect(mockOnClick).toHaveBeenCalledTimes(2);
  });

  test('has proper accessibility attributes', () => {
    render(<Button {...defaultProps} aria-label="Custom button" />);
    
    const button = screen.getByRole('button', { name: 'Custom button' });
    expect(button).toBeInTheDocument();
  });

  test('renders with custom data attributes', () => {
    render(<Button {...defaultProps} data-testid="custom-button" />);
    
    expect(screen.getByTestId('custom-button')).toBeInTheDocument();
  });

  test('handles focus and blur events', async () => {
    const user = userEvent.setup();
    const mockOnFocus = jest.fn();
    const mockOnBlur = jest.fn();
    
    render(<Button {...defaultProps} onFocus={mockOnFocus} onBlur={mockOnBlur} />);
    
    const button = screen.getByRole('button');
    
    await user.tab();
    expect(mockOnFocus).toHaveBeenCalledTimes(1);
    
    await user.tab();
    expect(mockOnBlur).toHaveBeenCalledTimes(1);
  });

  test('renders without console errors', () => {
    const consoleSpy = jest.spyOn(console, 'error').mockImplementation(() => {});
    
    render(<Button {...defaultProps} />);
    
    expect(consoleSpy).not.toHaveBeenCalled();
    consoleSpy.mockRestore();
  });
});

