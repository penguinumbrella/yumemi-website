import React from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import './index.css';
import Header from './components/layout/Header';
import Footer from './components/layout/Footer';
import PerformanceMonitor from './components/ui/PerformanceMonitor';
import Home from './components/pages/Home';
import TermsOfService from './components/pages/TermsOfService';
import PrivacyPolicy from './components/pages/PrivacyPolicy';

// Component to scroll to top on route changes
const ScrollToTop = () => {
  const { pathname } = useLocation();

  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
};

function App() {
  return (
    <Router basename="/yumemi-website">
      <ScrollToTop />
      <div className="App">
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/terms" element={<TermsOfService />} />
          <Route path="/privacy" element={<PrivacyPolicy />} />
        </Routes>
        <Footer />
        <PerformanceMonitor />
      </div>
    </Router>
  );
}

export default App;
