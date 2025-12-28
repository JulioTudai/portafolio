import React, { useState, useRef } from 'react';
import emailjs from '@emailjs/browser';

const Contact = () => {
  const form = useRef();
  const [copied, setCopied] = useState(false);
  const [isSending, setIsSending] = useState(false);
  const [status, setStatus] = useState(null);

  const email = "MTB.juliomarquinez@hotmail.com"; 
  const linkedinUrl = "https://www.linkedin.com/in/julio-marquinez/";
  const location = "Provincia de Buenos Aires, Argentina";

  const YOUR_SERVICE_ID = "service_odigwwg";
  const YOUR_TEMPLATE_ID = "template_c4ounwo";
  const YOUR_PUBLIC_KEY = "DVHSNDNUs6PjwZBV_";

  const handleCopyEmail = (e) => {
    e.preventDefault(); 
    navigator.clipboard.writeText(email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const sendEmail = (e) => {
    e.preventDefault();

    // para evitar bots
    if (e.target.company_honey.value) {
        return; 
    }

    //Limitador de tiempo
    const lastSentTime = localStorage.getItem('lastEmailTime');
    const COOLDOWN_TIME = 5 * 60 * 1000; // 5 minutos
    const now = Date.now();

    if (lastSentTime && (now - parseInt(lastSentTime)) < COOLDOWN_TIME) {
        
        const remainingMinutes = Math.ceil((COOLDOWN_TIME - (now - parseInt(lastSentTime))) / 60000);
        
        setStatus('rate_limit'); 
        alert(`Por favor espera ${remainingMinutes} minutos antes de enviar otro mensaje.`); // Opcional: Alerta visual
        return;
    }

    setIsSending(true);
    setStatus(null);

    emailjs.sendForm(YOUR_SERVICE_ID, YOUR_TEMPLATE_ID, form.current, YOUR_PUBLIC_KEY)
      .then((result) => {
          console.log("Email enviado:", result.text);
          setStatus('success');
          setIsSending(false);
          
          // se guarda la hora del envio
          localStorage.setItem('lastEmailTime', Date.now().toString());

          form.current.reset(); 
          setTimeout(() => setStatus(null), 5000); 
      }, (error) => {
          console.log("Error al enviar:", error.text);
          setStatus('error');
          setIsSending(false);
      });
  };

  return (
    <section id="contact" className="py-16 bg-slate-200 dark:bg-gray-900 transition-colors duration-300">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center mb-10">
          <h2 className="text-2xl md:text-3xl font-bold text-slate-900 dark:text-white">Hablemos</h2>
          <div className="mt-2 h-1 w-16 bg-emerald-600 mx-auto rounded"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          
          <div className="md:col-span-1 bg-emerald-600 rounded-xl p-5 text-white shadow-lg relative overflow-hidden flex flex-col items-center justify-center text-center">
            <div className="absolute top-0 right-0 w-24 h-24 bg-white opacity-10 rounded-full blur-2xl -mr-8 -mt-8"></div>
            <div className="absolute bottom-0 left-0 w-24 h-24 bg-black opacity-10 rounded-full blur-2xl -ml-8 -mb-8"></div>

            <h3 className="text-lg font-bold mb-4 relative z-10">Contacto</h3>
            
            <div className="flex flex-col items-center gap-1 mb-6 relative z-10 opacity-90">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
                </svg>
                <span className="text-xs font-medium max-w-[150px] leading-tight">{location}</span>
            </div>

            <div className="flex gap-4 relative z-10">
                <button 
                    type="button" 
                    onClick={handleCopyEmail}
                    className="p-3 bg-white/20 rounded-full hover:bg-white hover:text-emerald-600 transition-all duration-300 shadow-sm relative group"
                    title="Clic para copiar email"
                >
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
                    </svg>
                    {copied && (
                        <span className="absolute -top-8 left-1/2 transform -translate-x-1/2 bg-white text-emerald-700 text-[10px] font-bold px-2 py-0.5 rounded shadow whitespace-nowrap animate-bounce">
                            ¡Copiado!
                        </span>
                    )}
                </button>

                <a 
                    href={linkedinUrl} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="p-3 bg-white/20 rounded-full hover:bg-white hover:text-emerald-600 transition-all duration-300 shadow-sm"
                >
                    <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24" className="w-6 h-6">
                        <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                    </svg>
                </a>
            </div>
          </div>

          <div className="md:col-span-2 bg-slate-100 dark:bg-gray-800 rounded-xl p-6 shadow-md border border-slate-200 dark:border-gray-700">
            <form ref={form} onSubmit={sendEmail} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="from_name" className="block text-xs font-bold text-slate-600 dark:text-gray-400 mb-1 uppercase tracking-wide">Nombre</label>
                  <input 
                    type="text" 
                    name="from_name" 
                    required
                    className="w-full px-3 py-2 rounded-lg bg-white dark:bg-gray-700 border border-slate-300 dark:border-gray-600 focus:ring-2 focus:ring-emerald-500 outline-none transition-all dark:text-white text-sm" 
                    placeholder="Tu nombre"
                  />
                </div>
                <div>
                  <label htmlFor="from_email" className="block text-xs font-bold text-slate-600 dark:text-gray-400 mb-1 uppercase tracking-wide">Email</label>
                  <input 
                    type="email" 
                    name="from_email" 
                    required
                    className="w-full px-3 py-2 rounded-lg bg-white dark:bg-gray-700 border border-slate-300 dark:border-gray-600 focus:ring-2 focus:ring-emerald-500 outline-none transition-all dark:text-white text-sm" 
                    placeholder="tu@email.com"
                  />
                </div>
              </div>
              
              <div>
                  <label htmlFor="subject" className="block text-xs font-bold text-slate-600 dark:text-gray-400 mb-1 uppercase tracking-wide">Asunto</label>
                  <input 
                    type="text" 
                    name="subject" 
                    required
                    className="w-full px-3 py-2 rounded-lg bg-white dark:bg-gray-700 border border-slate-300 dark:border-gray-600 focus:ring-2 focus:ring-emerald-500 outline-none transition-all dark:text-white text-sm" 
                    placeholder="Asunto del mensaje"
                  />
              </div>

              <div>
                <label htmlFor="mensaje" className="block text-xs font-bold text-slate-600 dark:text-gray-400 mb-1 uppercase tracking-wide">Mensaje</label>
                <textarea 
                    name="message"
                    rows="3" 
                    required
                    className="w-full px-3 py-2 rounded-lg bg-white dark:bg-gray-700 border border-slate-300 dark:border-gray-600 focus:ring-2 focus:ring-emerald-500 outline-none transition-all dark:text-white resize-none text-sm" 
                    placeholder="Escribe tu mensaje..."
                ></textarea>
              </div>

              <input 
                type="text" 
                name="company_honey" 
                className="hidden" 
                autoComplete="off"
              />

              <button 
                type="submit" 
                disabled={isSending}
                className={`w-full text-white font-medium py-2 px-6 rounded-lg transition-colors shadow-lg text-sm ${isSending ? 'bg-emerald-400 cursor-not-allowed' : 'bg-emerald-600 hover:bg-emerald-700'}`}
              >
                {isSending ? 'Enviando...' : 'Enviar Mensaje'}
              </button>

              {status === 'success' && (
                <p className="text-emerald-600 text-sm text-center font-medium animate-pulse mt-2">
                  ¡Mensaje enviado con éxito! Te responderé pronto.
                </p>
              )}
              {status === 'error' && (
                <p className="text-red-500 text-sm text-center font-medium mt-2">
                  Hubo un error al enviar. Por favor intenta más tarde.
                </p>
              )}
            </form>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Contact;