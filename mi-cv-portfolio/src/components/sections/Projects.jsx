import React from 'react';

const Projects = () => {
  const projects = [
    {
      title: "E-commerce Microservicios",
      description: "Plataforma de comercio electrónico modular. Arquitectura distribuida con autenticación segura vía Tokens (JWT), orquestación con Docker y persistencia de datos con JPA.",
      tech: ["Java 21", "Spring Boot", "Docker", "JWT", "Microservicios"],
      githubLink: null, // Oculto
      demoLink: null, 
    },
    {
      title: "Arquitectura Cloud & Costos",
      description: "Análisis y diseño de marcos de trabajo para migración a la nube. Comparativa de costos On-Premise vs Cloud y cálculos de Alta Disponibilidad.",
      tech: ["Cloud Computing", "AWS", "Cost Analysis", "DevOps"],
      githubLink: null, // Oculto
      demoLink: null,
    },
    {
      title: "Portafolio Profesional",
      description: "Plataforma personal diseñada con React y Tailwind CSS. Implementación de modo oscuro persistente, diseño responsivo y despliegue automatizado.",
      tech: ["React", "Tailwind CSS", "Vite", "UX/UI"],
      githubLink: "https://github.com/JulioMarquinez/portafolio", // Visible (enlace a tu repo)
      demoLink: null, 
    },
  ];

  return (
    <section id="projects" className="py-20 bg-slate-200 dark:bg-gray-900 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-slate-900 dark:text-white">Mis Proyectos</h2>
          <div className="mt-2 h-1 w-20 bg-emerald-600 mx-auto rounded"></div>
          <p className="mt-4 text-slate-600 dark:text-gray-400 max-w-2xl mx-auto">
            Aplicando arquitectura de software moderna para resolver problemas complejos.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div key={index} className="bg-slate-100 dark:bg-gray-900 rounded-xl shadow-lg border border-slate-200 dark:border-gray-700 overflow-hidden hover:shadow-xl transition-all duration-300 flex flex-col">
              
              <div className="h-48 bg-emerald-50 dark:bg-gray-800 flex items-center justify-center relative group">
                <span className="text-4xl">
                  {index === 0 ? "🛒" : index === 1 ? "☁️" : "🚀"}
                </span>
                <div className="absolute inset-0 bg-emerald-900 bg-opacity-0 group-hover:bg-opacity-10 transition-all duration-300"></div>
              </div>

              <div className="p-6 flex-1 flex flex-col">
                <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2">
                  {project.title}
                </h3>
                <p className="text-slate-600 dark:text-gray-400 text-sm mb-4 flex-1">
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tech.map((tech, i) => (
                    <span 
                      key={i} 
                      className="px-2 py-1 bg-white dark:bg-emerald-900/30 text-emerald-700 dark:text-emerald-300 text-xs font-medium rounded-md border border-emerald-100 dark:border-emerald-800"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex gap-4 mt-auto">
                  
                  {/* CONDICIONAL: Solo muestra el botón si githubLink tiene valor */}
                  {project.githubLink && (
                    <a 
                      href={project.githubLink}
                      className="flex-1 text-center px-4 py-2 border border-slate-400 dark:border-gray-500 text-slate-700 dark:text-gray-200 rounded-lg hover:bg-slate-800 hover:text-white dark:hover:bg-gray-700 transition-colors text-sm font-medium"
                      target="_blank" 
                      rel="noopener noreferrer"
                    >
                      GitHub
                    </a>
                  )}

                  {/* CONDICIONAL: Solo muestra el botón si demoLink tiene valor */}
                  {project.demoLink && (
                    <a 
                      href={project.demoLink}
                      className="flex-1 text-center px-4 py-2 bg-emerald-600 text-white rounded-lg hover:bg-emerald-700 transition-colors text-sm font-medium"
                      target={project.demoLink.startsWith('http') ? "_blank" : "_self"}
                      rel={project.demoLink.startsWith('http') ? "noopener noreferrer" : undefined}
                    >
                      Demo
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Projects;