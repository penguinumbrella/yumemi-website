# Yumemi Website Test Stack

This document provides a comprehensive overview of the testing infrastructure for the Yumemi website.

## 🚀 Quick Start

### Installation
```bash
npm install
```

### Running Tests
```bash
# Run all tests
npm test

# Run tests with coverage
npm run test:coverage

# Run tests in debug mode
npm run test:debug

# Run tests in watch mode
npm run test:watch

# Run tests for CI
npm run test:ci
```

## 📁 Test Structure

```
src/
├── __mocks__/                 # Jest mocks
│   └── fileMock.js           # Static asset mocks
├── test/
│   └── setup/
│       ├── globalSetup.js    # Global test setup
│       └── globalTeardown.js # Global test teardown
├── utils/
│   └── testUtils.js         # Test utilities and helpers
├── components/
│   ├── pages/
│   │   └── Home.test.js     # Page component tests
│   ├── sections/
│   │   └── Hero.test.js     # Section component tests
│   └── ui/
│       ├── Button.test.js    # UI component tests
│       └── PerformanceMonitor.test.js # Performance tests
├── App.test.js              # Main app tests
└── setupTests.js            # Test setup configuration
```

## 🧪 Testing Strategy

### 1. Unit Tests
- **Component Tests**: Test individual components in isolation
- **Utility Tests**: Test helper functions and utilities
- **Mock Tests**: Test with mocked dependencies

### 2. Integration Tests
- **Routing Tests**: Test navigation and routing behavior
- **User Interaction Tests**: Test user interactions and events
- **API Tests**: Test external integrations and API calls

### 3. Accessibility Tests
- **Screen Reader Tests**: Test with screen readers
- **Keyboard Navigation**: Test keyboard-only navigation
- **Color Contrast**: Test color accessibility

## 🛠️ Test Utilities

### Custom Render Functions
```javascript
import { renderWithRouter } from '../utils/testUtils';

// Render component with router context
renderWithRouter(<MyComponent />, { route: '/test' });
```

### Mock Utilities
```javascript
import { mockFramerMotion, mockSwiper } from '../utils/testUtils';

// Mock external libraries
mockFramerMotion();
mockSwiper();
```

### Test Data
```javascript
import { createTestData } from '../utils/testUtils';

const testUser = createTestData.user;
const testScreenshots = createTestData.screenshots;
```

## 📊 Coverage Configuration

### Coverage Thresholds
- **Branches**: 70%
- **Functions**: 70%
- **Lines**: 70%
- **Statements**: 70%

### Coverage Exclusions
- `src/index.js`
- `src/reportWebVitals.js`
- `src/setupTests.js`
- Test files (`.test.js`, `.spec.js`)
- Mock directories

## 🔧 Debugging Tools

### VS Code Debugging
1. **Launch Chrome**: Debug in Chrome browser
2. **Launch Firefox**: Debug in Firefox browser
3. **Attach to Chrome**: Attach to running Chrome instance
4. **Debug Tests**: Debug Jest tests
5. **Debug Build**: Debug build process

### Browser Debugging
1. **Chrome DevTools**: Set breakpoints in React components
2. **React Developer Tools**: Inspect component hierarchy
3. **Performance Profiler**: Analyze performance issues

### Performance Monitoring
- **Web Vitals**: Automatic performance monitoring
- **Bundle Analysis**: Analyze bundle size
- **Source Maps**: Debug production builds

## 🎯 Test Patterns

### Component Testing
```javascript
describe('Component Name', () => {
  const defaultProps = {
    // Default props
  };

  test('renders correctly', () => {
    render(<Component {...defaultProps} />);
    expect(screen.getByText('Expected text')).toBeInTheDocument();
  });

  test('handles user interactions', async () => {
    const user = userEvent.setup();
    const mockOnClick = jest.fn();
    
    render(<Component {...defaultProps} onClick={mockOnClick} />);
    
    await user.click(screen.getByRole('button'));
    expect(mockOnClick).toHaveBeenCalled();
  });
});
```

### Mocking External Dependencies
```javascript
// Mock framer-motion
jest.mock('framer-motion', () => ({
  motion: {
    div: ({ children, ...props }) => <div {...props}>{children}</div>
  }
}));

// Mock swiper
jest.mock('swiper/react', () => ({
  Swiper: ({ children }) => <div data-testid="swiper">{children}</div>
}));
```

### Testing Async Operations
```javascript
test('handles async operations', async () => {
  render(<AsyncComponent />);
  
  await waitFor(() => {
    expect(screen.getByText('Loaded')).toBeInTheDocument();
  });
});
```

## 🚨 Common Issues & Solutions

### 1. Component Not Rendering
```javascript
// Check exports
export default MyComponent;

// Check imports
import MyComponent from './MyComponent';
```

### 2. Mock Not Working
```javascript
// Ensure mocks are defined before imports
jest.mock('external-library');
import MyComponent from './MyComponent';
```

### 3. Async Test Failures
```javascript
// Use waitFor for async operations
await waitFor(() => {
  expect(element).toBeInTheDocument();
});
```

### 4. Styling Issues
```javascript
// Mock CSS modules
jest.mock('./Component.module.css', () => ({
  container: 'container-class',
  button: 'button-class'
}));
```

## 📈 Performance Testing

### Web Vitals Monitoring
```javascript
// PerformanceMonitor component automatically tracks:
// - CLS (Cumulative Layout Shift)
// - FID (First Input Delay)
// - FCP (First Contentful Paint)
// - LCP (Largest Contentful Paint)
// - TTFB (Time to First Byte)
```

### Bundle Analysis
```bash
# Analyze bundle size
npm run analyze

# Check for large dependencies
npm ls --depth=0
```

## 🔍 Debugging Commands

### Development
```bash
# Start development server
npm start

# Start without opening browser
npm run debug:start

# Build with source maps
npm run debug:build
```

### Testing
```bash
# Run specific test file
npm test -- --testPathPattern=Button.test.js

# Run tests with verbose output
npm test -- --verbose

# Update snapshots
npm test -- -u
```

### Linting
```bash
# Run ESLint
npm run lint

# Fix ESLint issues
npm run lint:fix
```

## 📚 Best Practices

### 1. Test Organization
- Group related tests in `describe` blocks
- Use descriptive test names
- Follow AAA pattern (Arrange, Act, Assert)

### 2. Mocking Strategy
- Mock external dependencies
- Use realistic test data
- Avoid over-mocking

### 3. Accessibility Testing
- Test keyboard navigation
- Check screen reader compatibility
- Verify color contrast

### 4. Performance Testing
- Monitor bundle size
- Track Core Web Vitals
- Test on different devices

## 🛡️ Error Handling

### React Error Boundary
```javascript
import { ErrorBoundary } from 'react-error-boundary';

<ErrorBoundary FallbackComponent={ErrorFallback}>
  <YourComponent />
</ErrorBoundary>
```

### Test Error Handling
```javascript
test('handles errors gracefully', () => {
  const consoleSpy = jest.spyOn(console, 'error').mockImplementation(() => {});
  
  render(<ComponentThatMightError />);
  
  expect(consoleSpy).not.toHaveBeenCalled();
  consoleSpy.mockRestore();
});
```

## 📖 Resources

- [React Testing Library Documentation](https://testing-library.com/docs/react-testing-library/intro/)
- [Jest Documentation](https://jestjs.io/docs/getting-started)
- [React DevTools](https://react.dev/learn/react-developer-tools)
- [Web Vitals](https://web.dev/vitals/)
- [Accessibility Testing](https://www.w3.org/WAI/ER/tools/)

## 🤝 Contributing

When adding new tests:
1. Follow the existing test patterns
2. Use descriptive test names
3. Mock external dependencies
4. Test both success and error cases
5. Ensure accessibility compliance
6. Update this documentation if needed

