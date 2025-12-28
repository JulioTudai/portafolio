import React from 'react';
import Projects from '../components/sections/Projects';
import Contact from '../components/sections/Contact';
// Importamos nuestro nuevo componente
import PageTransition from '../components/ui/PageTransition';

const WorkPage = () => {
  return (
    // Envolvemos todo con PageTransition
    <PageTransition>
      <Projects />
      <Contact />
    </PageTransition>
  );
};

export default WorkPage;