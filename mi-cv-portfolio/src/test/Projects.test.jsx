import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import Projects from '../components/sections/Projects';

describe('Projects Component', () => {

  it('debería renderizar el título de la sección', () => {
    render(<Projects />);
    expect(screen.getByText(/proyectos/i)).toBeInTheDocument();
  });

  it('debería renderizar las tarjetas de los proyectos', () => {
    render(<Projects />);
    
    const githubLinks = screen.getAllByRole('link', { name: /github|código/i });
    
    expect(githubLinks.length).toBeGreaterThan(0);
  });

  it('los enlaces externos deberían ser seguros (target blank)', () => {
    render(<Projects />);
    
    const links = screen.getAllByRole('link');
    const externalLinks = links.filter(link => link.getAttribute('href')?.startsWith('http'));

    externalLinks.forEach(link => {
      expect(link).toHaveAttribute('target', '_blank');
      expect(link).toHaveAttribute('rel', expect.stringContaining('noopener'));
      expect(link).toHaveAttribute('rel', expect.stringContaining('noreferrer'));
    });
  });
});