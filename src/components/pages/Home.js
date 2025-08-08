import React from 'react';
import Hero from '../sections/Hero';
import About from '../sections/About';
import ScreenshotCarousel from '../sections/ScreenshotCarousel';
import BetaSignup from '../sections/BetaSignup';
import TechBlog from '../sections/TechBlog';

const Home = () => {
  return (
    <>
      <Hero />
      <div id="about">
        <About />
      </div>
      <div id="screenshots">
        <ScreenshotCarousel />
      </div>
      <div id="beta-signup">
        <BetaSignup />
      </div>
      <div id="tech-blog">
        <TechBlog />
      </div>
    </>
  );
};

export default Home;
