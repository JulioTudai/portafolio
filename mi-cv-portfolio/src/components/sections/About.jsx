import React from 'react';

const About = () => {
  const skillCategories = [
    {
      title: "Backend Core",
      icon: "⚙️",
      skills: ["Java 17+", "Spring Boot", "Hibernate / JPA", "MySQL", "MongoDB"]
    },
    {
      title: "Frontend & UI",
      icon: "🎨",
      skills: ["React", "Angular", "Diseño Responsivo", "Performance Web"]
    },
    {
      title: "Infraestructura & DevOps",
      icon: "☁️",
      skills: ["AWS (EC2, S3, RDS)", "Docker", "CI/CD", "Microservicios"]
    }
  ];

  return (
    <section id="about" className="py-20 bg-slate-200 dark:bg-gray-900 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-slate-900 dark:text-white">Sobre mí</h2>
          <div className="mt-2 h-1 w-20 bg-emerald-600 mx-auto rounded"></div>
        </div>

        <div className="max-w-4xl mx-auto text-center mb-16">
            <h3 className="text-2xl font-semibold text-slate-800 dark:text-gray-200 mb-6">
              ¿Quién soy?
            </h3>
            <p className="text-slate-600 dark:text-gray-400 leading-relaxed text-lg mb-6">
              Soy un estudiante apasionado por la arquitectura de software y el desarrollo backend robusto. 
              Me enfoco en crear soluciones escalables utilizando las mejores prácticas de la industria.
            </p>
            <p className="text-slate-600 dark:text-gray-400 leading-relaxed text-lg">
              Actualmente estoy profundizando mis conocimientos en arquitecturas de microservicios y despliegue en la nube, 
              mientras expando mis horizontes hacia el frontend con tecnologías modernas.
            </p>
            
            <div className="flex justify-center gap-8 mt-8">
              <div>
                <span className="block text-slate-500 dark:text-gray-500 text-sm mb-1">Ubicación</span>
                <span className="font-medium text-slate-900 dark:text-white">Argentina</span>
              </div>
              <div>
                <span className="block text-slate-500 dark:text-gray-500 text-sm mb-1">Estado</span>
                <span className="text-emerald-700 font-medium bg-emerald-100 dark:bg-emerald-900/50 dark:text-emerald-300 px-3 py-1 rounded-full text-sm inline-block border border-emerald-200 dark:border-emerald-800">
                  Open to work
                </span>
              </div>
            </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => (
            <div 
              key={index}
              className="bg-slate-100 dark:bg-gray-800 p-6 rounded-xl shadow-md border border-slate-200 dark:border-gray-700 hover:shadow-lg transition-all duration-300"
            >
              <div className="flex items-center gap-3 mb-6">
                <span className="text-2xl bg-white dark:bg-gray-700 p-2 rounded-lg shadow-sm border border-slate-100 dark:border-gray-600">
                  {category.icon}
                </span>
                <h4 className="text-xl font-bold text-slate-900 dark:text-white">
                  {category.title}
                </h4>
              </div>

              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill, idx) => (
                  <span 
                    key={idx}
                    className="px-3 py-1 bg-white dark:bg-emerald-900/20 text-emerald-700 dark:text-emerald-400 text-sm font-medium rounded-md border border-slate-200 dark:border-emerald-800/50 shadow-sm"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default About;