// src/components/sections/Contact.jsx
const Contact = () => {
  return (
    <section id="contact" className="py-20 bg-slate-200 dark:bg-gray-900 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-emerald-600 dark:text-emerald-400">Contáctame</h2>
          <div className="mt-2 h-1 w-20 bg-emerald-600 mx-auto rounded"></div>
          <p className="mt-4 text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            ¿Tienes alguna propuesta o proyecto en mente? ¡Hablemos!
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="space-y-8">
            <h3 className="text-2xl font-bold text-emerald-600 dark:text-emerald-400">Información de Contacto</h3>
            <p className="text-slate-700 dark:text-gray-300">
              Prefiero la comunicación por Email o LinkedIn. Suelo responder en menos de 24 horas.
            </p>
            
            <div className="space-y-4">
              {/* Contact items with icons */}
              <div className="flex items-start space-x-4">
                <span className="text-emerald-600 dark:text-emerald-400 text-xl">📧</span>
                <div>
                  <h4 className="font-bold text-slate-900 dark:text-white">Email</h4>
                  <a href="mailto:tuemail@ejemplo.com" className="text-emerald-700 dark:text-emerald-400 hover:underline font-medium">
                    tuemail@ejemplo.com
                  </a>
                </div>
              </div>
              
              {/* Add other contact items similarly */}
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-8 border border-slate-300 dark:border-gray-700 transition-all duration-200 hover:shadow-xl">
            <form className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-slate-800 dark:text-gray-300 mb-1">Nombre</label>
                <input 
                  type="text" 
                  id="name"
                  className="w-full px-4 py-2 border border-slate-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-slate-800 dark:text-white rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 outline-none transition-all"
                  placeholder="Tu nombre"
                />
              </div>
              
              {/* Other form fields similarly */}
              
              <button 
                type="submit"
                className="w-full py-3 bg-emerald-600 text-white rounded-lg hover:bg-emerald-700 transition-colors font-bold shadow-md hover:shadow-lg"
              >
                Enviar Mensaje
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;