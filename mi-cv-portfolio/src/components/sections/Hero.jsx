import React from 'react';
import profilePic from '../../assets/FotoPerfilCv.jpeg'; 

const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center pt-16 bg-gradient-to-b from-emerald-100 to-slate-200 dark:from-gray-900 dark:to-gray-800 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center">
        
        {/* Texto de presentación */}
        <div className="md:w-1/2 text-center md:text-left mb-10 md:mb-0">
          <h1 className="text-4xl md:text-6xl font-bold text-slate-900 dark:text-white mb-4">
            Hola, soy <span className="text-emerald-600 dark:text-emerald-400">Julio Marquinez</span>
          </h1>
          <h2 className="text-xl md:text-2xl text-slate-700 dark:text-gray-300 mb-6">
            Estudiante de Arquitectura de Software & Cloud Computing
          </h2>
          <p className="text-slate-600 dark:text-gray-400 mb-8 max-w-lg mx-auto md:mx-0">
            Apasionado por los microservicios, Java y la nube. 
            Construyendo soluciones escalables y eficientes.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
            <a 
              href="#contact" 
              className="px-8 py-3 bg-emerald-600 text-white rounded-lg hover:bg-emerald-700 transition-colors font-medium shadow-lg hover:shadow-emerald-500/30"
            >
              Contactame
            </a>
            <a 
              href="#" 
              className="px-8 py-3 border border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors font-medium"
            >
              Descargar CV
            </a>
          </div>
        </div>

        {/* Imagen / Avatar */}
        <div className="md:w-1/2 flex justify-center">
          <div className="relative w-64 h-64 md:w-96 md:h-96">
            {/* Círculo decorativo de fondo */}
            <div className="absolute inset-0 bg-emerald-100 dark:bg-emerald-900/30 rounded-full animate-pulse"></div>
            
            {/* Imagen real */}
            <img 
              src={profilePic} 
              alt="Foto de perfil" 
              className="absolute inset-2 w-[calc(100%-16px)] h-[calc(100%-16px)] object-cover rounded-full border-4 border-white dark:border-gray-800 shadow-xl"
            />
          </div>
        </div>

      </div>
    </section>
  );
};

export default Hero;