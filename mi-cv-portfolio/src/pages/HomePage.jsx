import React from 'react';
import Hero from '../components/sections/Hero';
import About from '../components/sections/About';
import PageTransition from '../components/ui/PageTransition';

const HomePage = () => {
  return (
    <PageTransition>
      <Hero />
      <About />
    </PageTransition>
  );
};

export default HomePage;