# 👨‍💻 Portafolio - Julio Marquinez

![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)
![Vite](https://img.shields.io/badge/Vite-B73BFE?style=for-the-badge&logo=vite&logoColor=FFD62E)
![TailwindCSS](https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)
![Vitest](https://img.shields.io/badge/Vitest-Testing-green?style=for-the-badge&logo=vitest&logoColor=white)

> Portafolio personal diseñado con una arquitectura moderna basada en componentes, enfocado en el rendimiento, la accesibilidad y la calidad del código asegurada mediante pruebas automatizadas.

## 🚀 Demo en Vivo
[🔗 Visitar Portafolio](https://tu-usuario-vercel.app) *(Reemplaza esto con tu link real cuando despliegues)*

---

## 🛠️ Stack Tecnológico

El proyecto utiliza un stack moderno optimizado para velocidad y mantenibilidad:

* **Core:** React 18 + Vite (Build Tool ultra-rápido).
* **Estilos:** Tailwind CSS (Diseño responsivo y Dark Mode nativo).
* **Routing:** React Router DOM v6.
* **Formularios:** EmailJS (Integración Serverless).
* **Testing:** Vitest + React Testing Library + JSDOM.

---

## 🛡️ Calidad de Software & Testing

A diferencia de proyectos estándar, este portafolio implementa una suite de **Pruebas Unitarias y de Integración** para garantizar la robustez del sistema.

### 🧪 Cobertura de Tests
Se utiliza **Vitest** como runner y **React Testing Library** para simular la interacción del usuario.

| Componente | Qué se prueba |
| :--- | :--- |
| **Navbar** | Renderizado condicional, navegación y lógica del **Modo Oscuro**. |
| **Hero** | Disponibilidad de elementos críticos y atributos de descarga del CV. |
| **Contact** | Simulación de input de usuario, **Mocking de EmailJS** y validación de envío. |
| **Seguridad** | Verificación de mecanismos Anti-Spam (Honeypot) y atributos de seguridad en enlaces externos (`noopener`). |

### 🤖 Ejecutar las Pruebas
Para verificar la integridad del código, ejecutar en la terminal:

```bash
npm run test