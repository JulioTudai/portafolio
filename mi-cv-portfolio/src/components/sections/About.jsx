import React from 'react';

const About = () => {
  // Lista de habilidades
  const skills = [
    { name: "Java 21", level: "Avanzado" },
    { name: "Spring Boot", level: "Avanzado" },
    { name: "Microservicios", level: "Intermedio" },
    { name: "Cloud Computing", level: "Intermedio" },
    { name: "Git / GitHub", level: "Intermedio" },
    { name: "Linux / Ubuntu", level: "Intermedio" },
    { name: "React", level: "Principiante" },
    { name: "SQL", level: "Intermedio" },
  ];

  return (
    <section id="about" className="py-20 bg-slate-200 dark:bg-gray-900 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Título de la sección */}
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white">Sobre mí</h2>
          <div className="mt-2 h-1 w-20 bg-emerald-600 mx-auto rounded"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          
          {/* Columna 1: Texto descriptivo */}
          <div className="space-y-6">
            <h3 className="text-2xl font-semibold text-slate-900 dark:text-gray-200">
              ¿Quién soy?
            </h3>
            <p className="text-slate-700 dark:text-gray-400 leading-relaxed">
              Soy un estudiante apasionado por la arquitectura de software y el desarrollo backend robusto. 
              Me enfoco en crear soluciones escalables utilizando las mejores prácticas de la industria.
            </p>
            <p className="text-slate-700 dark:text-gray-400 leading-relaxed">
              Actualmente estoy profundizando mis conocimientos en arquitecturas de microservicios y despliegue en la nube, 
              mientras expando mis horizontes hacia el frontend con tecnologías modernas como React.
            </p>
            
            {/* Datos rápidos */}
            <div className="grid grid-cols-2 gap-4 pt-4">
              <div>
                <span className="block text-slate-600 dark:text-gray-500 text-sm">Ubicación</span>
                <span className="font-medium text-slate-900 dark:text-white">Argentina</span>
              </div>
              <div>
                <span className="block text-slate-600 dark:text-gray-500 text-sm">Disponibilidad</span>
                <span className="text-emerald-600 font-medium bg-emerald-100 dark:bg-emerald-900 dark:text-emerald-300 px-2 py-0.5 rounded-full text-sm inline-block">
                  Open to work
                </span>
              </div>
            </div>
          </div>

          {/* Columna 2: Skills Grid */}
          <div>
            <h3 className="text-2xl font-semibold text-gray-800 dark:text-gray-200 mb-6">
              Habilidades Técnicas
            </h3>
            <div className="grid grid-cols-2 gap-4">
              {skills.map((skill, index) => (
                <div 
                  key={index}
                  className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow-sm border border-slate-300 hover:border-slate-400 dark:border-gray-700 hover:shadow-md transition-all duration-200"
                >
                  <h4 className="font-bold text-slate-900 dark:text-white">{skill.name}</h4>
                  <span className="text-sm text-slate-700 dark:text-emerald-400">{skill.level}</span>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};


export default About;