import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Solo necesitamos useNavigate ahora
import { HashLink } from 'react-router-hash-link';

const Navbar = ({ darkMode, toggleDarkMode }) => {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();

  // LOGICA CORREGIDA:
  // 1. Hacemos scroll suave arriba.
  // 2. Usamos navigate con replace:true para BORRAR el hash (#) de la URL inmediatamente.

  const handleLogoClick = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    navigate('/', { replace: true }); // <-- ESTO LIMPIA EL /#about
    setIsOpen(false);
  };

  const handleProjectsClick = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    navigate('/proyectos', { replace: true }); // <-- ESTO LIMPIA EL /#contact
    setIsOpen(false);
  };

  const scrollWithOffset = (el) => {
    const yCoordinate = el.getBoundingClientRect().top + window.pageYOffset;
    const yOffset = -80; 
    window.scrollTo({ top: yCoordinate + yOffset, behavior: 'smooth' }); 
  };

  return (
    <nav className="fixed w-full z-50 bg-slate-200/90 dark:bg-gray-900/90 backdrop-blur-sm border-b border-slate-300 dark:border-gray-800 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          
          {/* LOGO */}
          <div className="flex-shrink-0 cursor-pointer" onClick={handleLogoClick}>
            <div className="font-mono text-lg md:text-xl font-bold text-slate-800 dark:text-white flex items-center gap-2">
              <span className="text-emerald-600 dark:text-emerald-400">public class</span>
              <span>Portafolio</span>
              <span className="text-slate-500 dark:text-gray-400">{`{ }`}</span>
            </div>
          </div>

          {/* MENÚ DE ESCRITORIO */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              
              {/* Botón INICIO */}
              <button
                onClick={handleLogoClick}
                className="px-3 py-2 rounded-md text-sm font-medium text-slate-700 dark:text-gray-300 hover:text-emerald-600 dark:hover:text-emerald-400 hover:bg-slate-300 dark:hover:bg-gray-800 transition-all"
              >
                Inicio
              </button>

              {/* Enlace SOBRE MÍ */}
              <HashLink
                smooth
                to="/#about"
                scroll={scrollWithOffset}
                className="px-3 py-2 rounded-md text-sm font-medium text-slate-700 dark:text-gray-300 hover:text-emerald-600 dark:hover:text-emerald-400 hover:bg-slate-300 dark:hover:bg-gray-800 transition-all"
              >
                Sobre mí
              </HashLink>

              {/* Botón PROYECTOS */}
              <button
                onClick={handleProjectsClick}
                className="px-3 py-2 rounded-md text-sm font-medium text-slate-700 dark:text-gray-300 hover:text-emerald-600 dark:hover:text-emerald-400 hover:bg-slate-300 dark:hover:bg-gray-800 transition-all"
              >
                Proyectos
              </button>

              {/* Enlace CONTACTO */}
              <HashLink
                smooth
                to="/proyectos#contact"
                scroll={scrollWithOffset}
                className="px-3 py-2 rounded-md text-sm font-medium text-slate-700 dark:text-gray-300 hover:text-emerald-600 dark:hover:text-emerald-400 hover:bg-slate-300 dark:hover:bg-gray-800 transition-all"
              >
                Contacto
              </HashLink>
              
              {/* Botón Dark Mode */}
              <button
                onClick={toggleDarkMode}
                className="ml-4 p-2 rounded-lg bg-slate-300 dark:bg-gray-800 text-slate-800 dark:text-yellow-400 hover:bg-slate-400 dark:hover:bg-gray-700 transition-colors"
                aria-label="Toggle Dark Mode"
              >
                {darkMode ? '☀️' : '🌙'}
              </button>
            </div>
          </div>

          {/* MENÚ MÓVIL (Hamburguesa) */}
          <div className="md:hidden flex items-center">
             <button onClick={toggleDarkMode} className="mr-4 text-xl">
                 {darkMode ? '☀️' : '🌙'}
             </button>

            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 rounded-md text-slate-700 dark:text-gray-400 hover:bg-slate-400 dark:hover:bg-gray-700 focus:outline-none"
            >
              {!isOpen ? '☰' : '✕'} 
            </button>
          </div>
        </div>
      </div>

      {/* DESPLEGABLE MÓVIL */}
      {isOpen && (
        <div className="md:hidden bg-slate-200 dark:bg-gray-900 border-b border-slate-300 dark:border-gray-800">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            
            <button onClick={handleLogoClick} className="block w-full text-left px-3 py-2 rounded-md text-base font-medium text-slate-700 dark:text-gray-300 hover:bg-emerald-600 hover:text-white">
                Inicio
            </button>

            <HashLink smooth to="/#about" scroll={scrollWithOffset} onClick={() => setIsOpen(false)} className="block px-3 py-2 rounded-md text-base font-medium text-slate-700 dark:text-gray-300 hover:bg-emerald-600 hover:text-white">
                Sobre mí
            </HashLink>

            <button onClick={handleProjectsClick} className="block w-full text-left px-3 py-2 rounded-md text-base font-medium text-slate-700 dark:text-gray-300 hover:bg-emerald-600 hover:text-white">
                Proyectos
            </button>

            <HashLink smooth to="/proyectos#contact" scroll={scrollWithOffset} onClick={() => setIsOpen(false)} className="block px-3 py-2 rounded-md text-base font-medium text-slate-700 dark:text-gray-300 hover:bg-emerald-600 hover:text-white">
                Contacto
            </HashLink>

          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;