import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import Hero from '../components/sections/Hero';
import { describe, it, expect } from 'vitest';

describe('Hero Component', () => {
  
  it('debería mostrar tu nombre correctamente', () => {

    render(
      <BrowserRouter>
        <Hero />
      </BrowserRouter>
    );

    // Buscamos Julio
    const nameElement = screen.getByText(/Julio/i); 

    expect(nameElement).toBeInTheDocument();
  });

  it('debería tener un botón para descargar el CV', () => {
    render(
      <BrowserRouter>
        <Hero />
      </BrowserRouter>
    );

    // Buscamos un enlace que contenga el texto "Descargar CV"
    const cvButton = screen.getByRole('link', { name: /Descargar CV/i });
    
    expect(cvButton).toBeInTheDocument();

    // Verificamos que apunte al archivo correcto
    expect(cvButton).toHaveAttribute('href', '/CV_actualizado_2026.pdf');
    
    // Verificamos que tenga el atributo download
    expect(cvButton).toHaveAttribute('download');
  });
});