import React, { useState, useEffect } from 'react';

const PerformanceMonitor = () => {
  const [metrics, setMetrics] = useState({});
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Listen for performance metrics
    const handlePerformanceMetric = (event) => {
      if (event.detail && event.detail.name) {
        setMetrics(prev => ({
          ...prev,
          [event.detail.name]: {
            value: event.detail.value,
            rating: event.detail.rating,
            timestamp: Date.now()
          }
        }));
      }
    };

    // Custom event listener for performance metrics
    window.addEventListener('performance-metric', handlePerformanceMetric);

    // Also listen to console logs for web vitals
    const originalLog = console.log;
    console.log = (...args) => {
      originalLog.apply(console, args);
      
      // Parse performance metrics from console logs
      if (args[0] && typeof args[0] === 'string' && args[0].includes('Performance Metric:')) {
        const metricData = args[1];
        if (metricData && metricData.name) {
          setMetrics(prev => ({
            ...prev,
            [metricData.name]: {
              value: metricData.value,
              rating: metricData.rating,
              timestamp: Date.now()
            }
          }));
        }
      }
    };

    return () => {
      window.removeEventListener('performance-metric', handlePerformanceMetric);
      console.log = originalLog;
    };
  }, []);

  const getRatingColor = (rating) => {
    switch (rating) {
      case 'good': return 'text-green-500';
      case 'needs-improvement': return 'text-yellow-500';
      case 'poor': return 'text-red-500';
      default: return 'text-gray-500';
    }
  };

  const formatValue = (name, value) => {
    switch (name) {
      case 'CLS':
        return value.toFixed(3);
      case 'FID':
      case 'FCP':
      case 'LCP':
      case 'TTFB':
        return `${Math.round(value)}ms`;
      default:
        return value;
    }
  };

  if (!isVisible) {
    return (
      <button
        onClick={() => setIsVisible(true)}
        className="fixed bottom-4 right-4 bg-blue-600 text-white p-2 rounded-full shadow-lg z-50 hover:bg-blue-700 transition-colors"
        title="Show Performance Monitor"
      >
        📊
      </button>
    );
  }

  return (
    <div className="fixed bottom-4 right-4 bg-white border border-gray-200 rounded-lg shadow-lg p-4 z-50 max-w-xs">
      <div className="flex justify-between items-center mb-3">
        <h3 className="text-sm font-semibold text-gray-900">Performance Metrics</h3>
        <button
          onClick={() => setIsVisible(false)}
          className="text-gray-400 hover:text-gray-600"
        >
          ✕
        </button>
      </div>
      
      <div className="space-y-2 text-xs">
        {Object.entries(metrics).map(([name, data]) => (
          <div key={name} className="flex justify-between items-center">
            <span className="font-medium text-gray-700">{name}:</span>
            <div className="flex items-center space-x-2">
              <span className={getRatingColor(data.rating)}>
                {formatValue(name, data.value)}
              </span>
              <span className={`px-1 py-0.5 rounded text-xs ${getRatingColor(data.rating)}`}>
                {data.rating}
              </span>
            </div>
          </div>
        ))}
        
        {Object.keys(metrics).length === 0 && (
          <p className="text-gray-500 text-center py-2">
            Loading metrics...
          </p>
        )}
      </div>
      
      <div className="mt-3 pt-2 border-t border-gray-100 text-xs text-gray-500">
        <div className="flex justify-between">
          <span>🟢 Good</span>
          <span>🟡 Needs Improvement</span>
          <span>🔴 Poor</span>
        </div>
      </div>
    </div>
  );
};

export default PerformanceMonitor;
