import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// Enhanced performance monitoring
const logPerformanceMetrics = (metric) => {
  console.log('📊 Performance Metric:', {
    name: metric.name,
    value: metric.value,
    rating: metric.rating,
    delta: metric.delta,
    id: metric.id
  });
  
  // Log specific metrics with emojis for easy identification
  switch (metric.name) {
    case 'CLS':
      console.log('🎯 Cumulative Layout Shift:', metric.value, `(${metric.rating})`);
      break;
    case 'FID':
      console.log('⚡ First Input Delay:', metric.value, `(${metric.rating})`);
      break;
    case 'FCP':
      console.log('🚀 First Contentful Paint:', metric.value, `(${metric.rating})`);
      break;
    case 'LCP':
      console.log('📈 Largest Contentful Paint:', metric.value, `(${metric.rating})`);
      break;
    case 'TTFB':
      console.log('🌐 Time to First Byte:', metric.value, `(${metric.rating})`);
      break;
    default:
      console.log('📊 Other Metric:', metric.name, metric.value, `(${metric.rating})`);
  }
};

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals(logPerformanceMetrics);
