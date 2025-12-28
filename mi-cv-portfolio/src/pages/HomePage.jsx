import React from 'react';
import Hero from '../components/sections/Hero';
import About from '../components/sections/About';
// Importamos nuestro nuevo componente
import PageTransition from '../components/ui/PageTransition';

const HomePage = () => {
  return (
    // Envolvemos todo con PageTransition
    <PageTransition>
      <Hero />
      <About />
    </PageTransition>
  );
};

export default HomePage;