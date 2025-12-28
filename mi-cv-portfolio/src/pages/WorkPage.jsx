import React from 'react';
import Projects from '../components/sections/Projects';
import Contact from '../components/sections/Contact';
import PageTransition from '../components/ui/PageTransition';

const WorkPage = () => {
  return (
    <PageTransition>
      <Projects />
      <Contact />
    </PageTransition>
  );
};

export default WorkPage;