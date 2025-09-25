# Yumemi Website Debug Guide

## Quick Start

### 1. Install Dependencies
```bash
npm install
```

### 2. Start Development Server
```bash
npm start
```

### 3. Run Tests
```bash
# Run all tests
npm test

# Run tests with coverage
npm run test:coverage

# Run tests in debug mode
npm run test:debug

# Run tests in watch mode
npm run test:watch
```

## Debugging Tools

### Browser Debugging

#### Chrome DevTools
1. Open Chrome DevTools (F12)
2. Go to Sources tab
3. Enable source maps in Settings
4. Set breakpoints in your React components

#### React Developer Tools
1. Install React Developer Tools extension
2. Open DevTools and go to Components tab
3. Inspect component hierarchy and props
4. Use Profiler tab for performance analysis

### VS Code Debugging

#### Launch Configurations
- **Launch Chrome**: Debug in Chrome browser
- **Launch Firefox**: Debug in Firefox browser
- **Attach to Chrome**: Attach to running Chrome instance
- **Debug Tests**: Debug Jest tests
- **Debug Build**: Debug build process

#### Debugging Steps
1. Set breakpoints in your code
2. Press F5 or go to Run and Debug
3. Select appropriate configuration
4. Start debugging

### Performance Monitoring

#### Web Vitals
The app includes automatic performance monitoring:
- **CLS** (Cumulative Layout Shift)
- **FID** (First Input Delay)
- **FCP** (First Contentful Paint)
- **LCP** (Largest Contentful Paint)
- **TTFB** (Time to First Byte)

#### Performance Analysis
```bash
# Analyze bundle size
npm run analyze

# Build with source maps for debugging
npm run debug:build
```

## Testing Strategy

### Unit Tests
- **Component Tests**: Test individual components
- **Utility Tests**: Test helper functions
- **Mock Tests**: Test with mocked dependencies

### Integration Tests
- **Routing Tests**: Test navigation and routing
- **User Interaction Tests**: Test user interactions
- **API Tests**: Test external integrations

### Accessibility Tests
- **Screen Reader Tests**: Test with screen readers
- **Keyboard Navigation**: Test keyboard-only navigation
- **Color Contrast**: Test color accessibility

## Common Issues & Solutions

### 1. Component Not Rendering
```javascript
// Check if component is properly exported
export default MyComponent;

// Check if component is properly imported
import MyComponent from './MyComponent';
```

### 2. Styling Issues
```bash
# Check Tailwind CSS compilation
npx tailwindcss -i ./src/index.css -o ./dist/output.css --watch
```

### 3. Animation Issues
```javascript
// Check if framer-motion is properly configured
import { motion } from 'framer-motion';

// Ensure animations are wrapped in AnimatePresence
import { AnimatePresence } from 'framer-motion';
```

### 4. Performance Issues
```javascript
// Use React.memo for expensive components
const ExpensiveComponent = React.memo(({ data }) => {
  return <div>{data}</div>;
});

// Use useMemo for expensive calculations
const expensiveValue = useMemo(() => {
  return expensiveCalculation(data);
}, [data]);
```

### 5. Routing Issues
```javascript
// Check if routes are properly configured
<Routes>
  <Route path="/" element={<Home />} />
  <Route path="/terms" element={<TermsOfService />} />
  <Route path="/privacy" element={<PrivacyPolicy />} />
</Routes>
```

## Debug Scripts

### Available Scripts
```bash
# Development
npm start                    # Start development server
npm run debug:start         # Start without opening browser

# Testing
npm test                    # Run tests in watch mode
npm run test:coverage       # Run tests with coverage
npm run test:debug          # Run tests in debug mode
npm run test:watch          # Run tests in watch mode
npm run test:ci             # Run tests for CI

# Building
npm run build               # Build for production
npm run debug:build         # Build with source maps

# Linting
npm run lint                # Run ESLint
npm run lint:fix            # Fix ESLint issues

# Analysis
npm run analyze             # Analyze bundle size
```

## Error Handling

### React Error Boundary
```javascript
import { ErrorBoundary } from 'react-error-boundary';

function ErrorFallback({ error, resetErrorBoundary }) {
  return (
    <div role="alert">
      <p>Something went wrong:</p>
      <pre>{error.message}</pre>
      <button onClick={resetErrorBoundary}>Try again</button>
    </div>
  );
}

<ErrorBoundary FallbackComponent={ErrorFallback}>
  <YourComponent />
</ErrorBoundary>
```

### Console Logging
```javascript
// Development-only logging
if (process.env.NODE_ENV === 'development') {
  console.log('Debug info:', data);
}

// Error logging
console.error('Error occurred:', error);
```

## Performance Optimization

### Code Splitting
```javascript
// Lazy load components
const LazyComponent = React.lazy(() => import('./LazyComponent'));

// Use Suspense
<Suspense fallback={<div>Loading...</div>}>
  <LazyComponent />
</Suspense>
```

### Bundle Analysis
```bash
# Analyze bundle size
npm run analyze

# Check for large dependencies
npm ls --depth=0
```

## Testing Best Practices

### Test Structure
```javascript
describe('Component Name', () => {
  beforeEach(() => {
    // Setup
  });

  afterEach(() => {
    // Cleanup
  });

  test('should render correctly', () => {
    // Test implementation
  });
});
```

### Mocking
```javascript
// Mock external dependencies
jest.mock('framer-motion', () => ({
  motion: {
    div: ({ children, ...props }) => <div {...props}>{children}</div>
  }
}));
```

### Accessibility Testing
```javascript
import { axe, toHaveNoViolations } from 'jest-axe';

expect.extend(toHaveNoViolations);

test('should not have accessibility violations', async () => {
  const { container } = render(<MyComponent />);
  const results = await axe(container);
  expect(results).toHaveNoViolations();
});
```

## Troubleshooting

### Common Test Failures
1. **Component not found**: Check import paths
2. **Mock not working**: Ensure mocks are defined before imports
3. **Async test failures**: Use `waitFor` for async operations
4. **Snapshot failures**: Update snapshots with `npm test -- -u`

### Build Issues
1. **Source map issues**: Use `GENERATE_SOURCEMAP=true`
2. **Bundle size issues**: Run `npm run analyze`
3. **Dependency conflicts**: Check `package-lock.json`

### Runtime Issues
1. **Memory leaks**: Check for unmounted component updates
2. **Performance issues**: Use React DevTools Profiler
3. **Styling issues**: Check Tailwind CSS compilation

## Resources

- [React Testing Library Documentation](https://testing-library.com/docs/react-testing-library/intro/)
- [Jest Documentation](https://jestjs.io/docs/getting-started)
- [React DevTools](https://react.dev/learn/react-developer-tools)
- [Chrome DevTools](https://developer.chrome.com/docs/devtools/)
- [Web Vitals](https://web.dev/vitals/)

