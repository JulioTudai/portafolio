import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';

const Navbar = ({ darkMode, toggleDarkMode }) => {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();

  const handleLogoClick = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    navigate('/', { replace: true });
    setIsOpen(false);
  };

  const handleProjectsClick = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    navigate('/proyectos', { replace: true });
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
          
          <div className="flex-shrink-0 cursor-pointer" onClick={handleLogoClick}>
            <div className="font-mono text-lg md:text-xl font-bold text-slate-800 dark:text-white flex items-center gap-2">
              <span className="text-emerald-600 dark:text-emerald-400">public class</span>
              <span>Portafolio</span>
              <span className="text-slate-500 dark:text-gray-400">{`{ }`}</span>
            </div>
          </div>

          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              
              <button
                onClick={handleLogoClick}
                className="px-3 py-2 rounded-md text-sm font-medium text-slate-700 dark:text-gray-300 hover:text-emerald-600 dark:hover:text-emerald-400 hover:bg-slate-300 dark:hover:bg-gray-800 transition-all"
              >
                Inicio
              </button>

              <HashLink
                smooth
                to="/#about"
                scroll={scrollWithOffset}
                className="px-3 py-2 rounded-md text-sm font-medium text-slate-700 dark:text-gray-300 hover:text-emerald-600 dark:hover:text-emerald-400 hover:bg-slate-300 dark:hover:bg-gray-800 transition-all"
              >
                Sobre mí
              </HashLink>

              <button
                onClick={handleProjectsClick}
                className="px-3 py-2 rounded-md text-sm font-medium text-slate-700 dark:text-gray-300 hover:text-emerald-600 dark:hover:text-emerald-400 hover:bg-slate-300 dark:hover:bg-gray-800 transition-all"
              >
                Proyectos
              </button>

              <HashLink
                smooth
                to="/proyectos#contact"
                scroll={scrollWithOffset}
                className="px-3 py-2 rounded-md text-sm font-medium text-slate-700 dark:text-gray-300 hover:text-emerald-600 dark:hover:text-emerald-400 hover:bg-slate-300 dark:hover:bg-gray-800 transition-all"
              >
                Contacto
              </HashLink>
              
              <button
                onClick={toggleDarkMode}
                className="ml-4 p-2 rounded-lg bg-slate-300 dark:bg-gray-800 text-slate-800 dark:text-yellow-400 hover:bg-slate-400 dark:hover:bg-gray-700 transition-colors"
                aria-label="Toggle Dark Mode"
              >
                {darkMode ? (
                // SOL 
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v2.25m6.364.386l-1.591 1.591M21 12h-2.25m-.386 6.364l-1.591-1.591M12 18.75V21m-4.773-4.227l-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z" />
                </svg>
              ) : (
                // LUNA
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M21.752 15.002A9.718 9.718 0 0118 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 003 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 009.002-5.998z" />
                </svg>
              )}
              </button>
            </div>
          </div>

          <div className="md:hidden flex items-center">
             
             {/* BOTÓN MÓVIl */}
             <button 
                onClick={toggleDarkMode} 
                className="mr-4 p-2 rounded-lg text-slate-800 dark:text-yellow-400 hover:bg-slate-300 dark:hover:bg-gray-800 transition-colors"
                aria-label="Toggle Dark Mode"
             >
                 {darkMode ? (
                    // SOL
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v2.25m6.364.386l-1.591 1.591M21 12h-2.25m-.386 6.364l-1.591-1.591M12 18.75V21m-4.773-4.227l-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z" />
                    </svg>
                 ) : (
                    // LUNA 
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M21.752 15.002A9.718 9.718 0 0118 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 003 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 009.002-5.998z" />
                    </svg>
                 )}
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