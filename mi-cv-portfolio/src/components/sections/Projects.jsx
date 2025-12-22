import React from 'react';

const Projects = () => {
  // 👇 ESTA ES LA LISTA QUE FALTABA
  const projects = [
    {
      title: "Sistema de Microservicios",
      description: "Arquitectura distribuida utilizando Spring Boot y Spring Cloud. Implementación de Service Discovery con Eureka y Gateway.",
      tech: ["Java 21", "Spring Boot", "Docker", "Microservicios"],
      githubLink: "#",
      demoLink: "#", 
    },
    {
      title: "API RESTful Segura",
      description: "Backend robusto para gestión de usuarios con autenticación JWT y documentación automática con Swagger/OpenAPI.",
      tech: ["Java", "Spring Security", "PostgreSQL", "JWT"],
      githubLink: "#",
      demoLink: null,
    },
    {
      title: "Portafolio Personal",
      description: "Este mismo sitio web, construido para presentar mi perfil profesional y proyectos de manera moderna y responsiva.",
      tech: ["React", "Tailwind CSS", "Vite", "Git"],
      githubLink: "#",
      demoLink: "#",
    },
  ];

  return (
    <section id="projects" className="py-20 bg-slate-200 dark:bg-gray-800 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Título */}
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white">Mis Proyectos</h2>
          <div className="mt-2 h-1 w-20 bg-emerald-600 mx-auto rounded"></div>
          <p className="mt-4 text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Algunos de los trabajos más recientes que he realizado, enfocados en arquitectura backend y soluciones en la nube.
          </p>
        </div>

        {/* Grid de Proyectos */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div key={index} className="bg-white dark:bg-gray-900 rounded-xl shadow-lg border border-slate-300 dark:border-gray-700 overflow-hidden hover:shadow-xl transition-all duration-300 flex flex-col">
              
              {/* Parte superior de la tarjeta */}
              <div className="h-48 bg-slate-50 dark:bg-gray-800 flex items-center justify-center relative group">
                <span className="text-4xl">💻</span>
                <div className="absolute inset-0 bg-emerald-900 bg-opacity-0 group-hover:bg-opacity-10 transition-all duration-300"></div>
              </div>

              {/* Contenido de la tarjeta */}
              <div className="p-6 flex-1 flex flex-col">
                <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2">
                  {project.title}
                </h3>
                <p className="text-slate-700 dark:text-gray-400 text-sm mb-4 flex-1">
                  {project.description}
                </p>
                
                {/* Etiquetas de tecnología */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tech.map((tech, i) => (
                    <span 
                      key={i} 
                      className="px-2 py-1 bg-slate-100 dark:bg-emerald-900/30 text-slate-800 dark:text-emerald-300 text-xs font-medium rounded-md border border-slate-200 dark:border-emerald-800"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Botones */}
                <div className="flex gap-4 mt-auto">
                  <a 
                    href={project.githubLink}
                    className="flex-1 text-center px-4 py-2 border border-slate-700 dark:border-gray-500 text-slate-800 dark:text-gray-200 rounded-lg hover:bg-slate-700 hover:text-white dark:hover:bg-gray-700 transition-colors text-sm font-medium"
                    target="_blank" 
                    rel="noopener noreferrer"
                  >
                    GitHub
                  </a>
                  {project.demoLink && (
                    <a 
                      href={project.demoLink}
                      className="flex-1 text-center px-4 py-2 bg-emerald-600 text-white rounded-lg hover:bg-emerald-700 transition-colors text-sm font-medium"
                      target="_blank" 
                      rel="noopener noreferrer"
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