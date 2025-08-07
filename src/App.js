import React from 'react';
import './App.css';
import Header from './components/Header';
import Features from './components/Features';
import Vision from './components/Vision';
import Screenshots from './components/Screenshots';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <Header />
      <Features />
      <Vision />
      <Screenshots />
      <Footer />
    </div>
  );
}

export default App;
