import { render, screen, fireEvent } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import { describe, it, expect, vi } from 'vitest';
import Navbar from '../components/ui/Navbar';

// Mockeamos window.scrollTo
window.scrollTo = vi.fn();

describe('Navbar Component', () => {
  
  const mockToggleDarkMode = vi.fn();

  it('debería renderizar el logo correctamente', () => {
    render(
      <BrowserRouter>
        <Navbar darkMode={false} toggleDarkMode={mockToggleDarkMode} />
      </BrowserRouter>
    );

    expect(screen.getByText(/public class/i)).toBeInTheDocument();
    expect(screen.getByText(/Portafolio/i)).toBeInTheDocument();
  });

  it('debería llamar a la función toggleDarkMode al hacer clic en el botón de tema', () => {
    render(
      <BrowserRouter>
        <Navbar darkMode={false} toggleDarkMode={mockToggleDarkMode} />
      </BrowserRouter>
    );

    const themeButtons = screen.getAllByRole('button', { name: /toggle dark mode/i });
    
    expect(themeButtons.length).toBeGreaterThan(0);

    fireEvent.click(themeButtons[0]);

    expect(mockToggleDarkMode).toHaveBeenCalledTimes(1);
  });

  it('debería abrir el menú móvil al hacer clic en la hamburguesa', () => {
    render(
      <BrowserRouter>
        <Navbar darkMode={false} toggleDarkMode={mockToggleDarkMode} />
      </BrowserRouter>
    );

    const menuButton = screen.getByText('☰');
    
    fireEvent.click(menuButton);

    expect(screen.getByText('✕')).toBeInTheDocument();
    
    const homeLinks = screen.getAllByText(/Inicio/i);
    expect(homeLinks.length).toBeGreaterThanOrEqual(2); 
  });
});