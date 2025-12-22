import React, { useState, useEffect } from 'react';
import Navbar from './components/ui/Navbar';
import Hero from './components/sections/Hero';
import About from './components/sections/About';
import Projects from './components/sections/Projects';
import Contact from './components/sections/Contact';
import Footer from './components/ui/Footer';

function App() {
  // CORRECCIÓN AQUÍ:
  // En lugar de iniciar siempre en 'true', verificamos si hay algo guardado en el navegador.
  const [darkMode, setDarkMode] = useState(() => {
    // 1. Buscamos si hay una preferencia guardada
    const savedTheme = localStorage.getItem('theme');
    
    // 2. Si existe, la usamos (convertimos el string a booleano)
    if (savedTheme) {
      return savedTheme === 'dark';
    }
    
    // 3. Si no hay nada guardado (primera vez), por defecto es OSCURO (true)
    return true;
  });

  // Efecto para aplicar la clase y GUARDAR la preferencia
  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark'); // Guardamos 'dark' en memoria
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light'); // Guardamos 'light' en memoria
    }
  }, [darkMode]);

  // Función para alternar modo
  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  return (
    <div className={`min-h-screen font-sans transition-colors duration-300 ${darkMode ? 'bg-gray-900 text-white' : 'bg-slate-200 text-slate-900'}`}>
      <Navbar darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
      
      <main>
        <Hero />
        <About />
        <Projects />
        <Contact />
      </main>
      
      <Footer />
    </div>
  );
}

export default App;