import React from 'react';
import { render, screen } from '@testing-library/react';
import Home from './Home';

// Mock all section components
jest.mock('../sections/Hero', () => {
  return function MockHero() {
    return <div data-testid="hero-section">Hero Section</div>;
  };
});

jest.mock('../sections/About', () => {
  return function MockAbout() {
    return <div data-testid="about-section">About Section</div>;
  };
});

jest.mock('../sections/ScreenshotCarousel', () => {
  return function MockScreenshotCarousel() {
    return <div data-testid="screenshot-carousel">Screenshot Carousel</div>;
  };
});

jest.mock('../sections/BetaSignup', () => {
  return function MockBetaSignup() {
    return <div data-testid="beta-signup">Beta Signup</div>;
  };
});

jest.mock('../sections/TechBlog', () => {
  return function MockTechBlog() {
    return <div data-testid="tech-blog">Tech Blog</div>;
  };
});

describe('Home Component', () => {
  test('renders all sections', () => {
    render(<Home />);
    
    expect(screen.getByTestId('hero-section')).toBeInTheDocument();
    expect(screen.getByTestId('about-section')).toBeInTheDocument();
    expect(screen.getByTestId('screenshot-carousel')).toBeInTheDocument();
    expect(screen.getByTestId('beta-signup')).toBeInTheDocument();
    expect(screen.getByTestId('tech-blog')).toBeInTheDocument();
  });

  test('has correct section IDs for navigation', () => {
    render(<Home />);
    
    const aboutSection = screen.getByTestId('about-section').closest('#about');
    const screenshotsSection = screen.getByTestId('screenshot-carousel').closest('#screenshots');
    const betaSignupSection = screen.getByTestId('beta-signup').closest('#beta-signup');
    const techBlogSection = screen.getByTestId('tech-blog').closest('#tech-blog');
    
    expect(aboutSection).toBeInTheDocument();
    expect(screenshotsSection).toBeInTheDocument();
    expect(betaSignupSection).toBeInTheDocument();
    expect(techBlogSection).toBeInTheDocument();
  });

  test('renders sections in correct order', () => {
    render(<Home />);
    
    const sections = screen.getAllByTestId(/section|carousel|signup|blog/);
    const sectionTexts = sections.map(section => section.textContent);
    
    expect(sectionTexts).toEqual([
      'Hero Section',
      'About Section', 
      'Screenshot Carousel',
      'Beta Signup',
      'Tech Blog'
    ]);
  });

  test('renders without errors', () => {
    const consoleSpy = jest.spyOn(console, 'error').mockImplementation(() => {});
    
    render(<Home />);
    
    expect(consoleSpy).not.toHaveBeenCalled();
    consoleSpy.mockRestore();
  });
});

