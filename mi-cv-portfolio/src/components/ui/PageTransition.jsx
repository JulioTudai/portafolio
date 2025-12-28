import React from 'react';
import { motion } from 'framer-motion';

const PageTransition = ({ children }) => {
  return (
    <motion.div
      // 1. ESTADO INICIAL: Invisible y desplazado hacia abajo (y: 20) y un poco a la izquierda (x: -20)
      initial={{ opacity: 0, y: 20, x: -20 }}
      
      // 2. ESTADO FINAL: Totalmente visible y en su posición original (0, 0)
      animate={{ opacity: 1, y: 0, x: 0 }}
      
      // 3. SALIDA: (Opcional) Si quisieras que se vaya desvaneciendo
      exit={{ opacity: 0, y: 20 }}
      
      // 4. DURACIÓN: Cuánto tarda la animación (0.5 segundos es suave)
      transition={{ duration: 0.5, ease: "easeOut" }}
      
      className="w-full"
    >
      {children}
    </motion.div>
  );
};

export default PageTransition;