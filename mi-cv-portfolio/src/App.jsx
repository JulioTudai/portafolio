import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Navbar from './components/ui/Navbar';
import Footer from './components/ui/Footer';

import HomePage from './pages/HomePage';
import WorkPage from './pages/WorkPage';

function App() {
  const [darkMode, setDarkMode] = useState(() => {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) {
      return savedTheme === 'dark';
    }
    return true;
  });

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  }, [darkMode]);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  return (
    <Router>
      <div className={`min-h-screen font-sans transition-colors duration-300 flex flex-col ${darkMode ? 'bg-gray-900 text-white' : 'bg-slate-200 text-slate-900'}`}>
        
        <Navbar darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
        
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<HomePage />} />
            
            <Route path="/proyectos" element={<WorkPage />} />
          </Routes>
        </main>
        
        <Footer />
      </div>
    </Router>
  );
}

export default App;