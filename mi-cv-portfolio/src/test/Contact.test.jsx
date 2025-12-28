import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import { describe, it, expect, vi, beforeEach } from 'vitest';
import Contact from '../components/sections/Contact';
import emailjs from '@emailjs/browser';

// Mock de EmailJS
vi.mock('@emailjs/browser', () => ({
  default: {
    sendForm: vi.fn().mockResolvedValue({ text: 'OK' }),
  },
}));

describe('Contact Component', () => {
  
  beforeEach(() => {
    vi.clearAllMocks();
    localStorage.clear();
  });

  it('debería renderizar el formulario correctamente', () => {
    render(<Contact />);
    expect(screen.getByPlaceholderText(/tu nombre/i)).toBeInTheDocument();
    expect(screen.getByRole('button', { name: /enviar mensaje/i })).toBeInTheDocument();
  });

  it('debería enviar el email cuando se llenan los campos válidos', async () => {
    render(<Contact />);

    fireEvent.change(screen.getByPlaceholderText(/tu nombre/i), { target: { value: 'Juan Test' } });
    fireEvent.change(screen.getByPlaceholderText(/tu@email.com/i), { target: { value: 'juan@test.com' } });
    fireEvent.change(screen.getByPlaceholderText(/asunto/i), { target: { value: 'Prueba Vitest' } });
    fireEvent.change(screen.getByPlaceholderText(/escribe tu mensaje/i), { target: { value: 'Hola mensaje test' } });

    // Enviamos
    const submitButton = screen.getByRole('button', { name: /enviar mensaje/i });
    fireEvent.click(submitButton);

    await waitFor(() => {
        expect(emailjs.sendForm).toHaveBeenCalledTimes(1);
    });

    expect(await screen.findByText(/¡Mensaje enviado con éxito!/i)).toBeInTheDocument();
  });

  it('NO debería enviar el email si el HONEYPOT (trampa para bots) está lleno', async () => {
    const { container } = render(<Contact />);
    const honeypotInput = container.querySelector('input[name="company_honey"]');
    
    expect(honeypotInput).toBeInTheDocument();

    fireEvent.change(screen.getByPlaceholderText(/tu nombre/i), { target: { value: 'Bot Malvado' } });
    fireEvent.change(honeypotInput, { target: { value: 'Soy un bot tonto' } });

    // enviar
    fireEvent.click(screen.getByRole('button', { name: /enviar mensaje/i }));

    // Verificamos que no se haya llamado a enviar
    await waitFor(() => {
        expect(emailjs.sendForm).not.toHaveBeenCalled();
    });
  });
});