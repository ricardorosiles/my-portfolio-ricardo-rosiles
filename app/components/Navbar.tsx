"use client";

const navItems = [
  { id: "hero", label: "Inicio" },
  { id: "experience", label: "Experiencia" },
  { id: "skills", label: "Skills" },
  { id: "projects", label: "Proyectos" },
  { id: "contact", label: "Contacto" },
];

export function Navbar() {
  const handleScroll = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <header className="navbar">
      <button className="navbar-logo" onClick={() => handleScroll("hero")} aria-label="Ir al inicio">
        <span>RR</span>
        <small>Full Stack Developer</small>
      </button>

      <nav aria-label="Navegación principal">
        <ul className="navbar-links">
          {navItems.map((item) => (
            <li key={item.id}>
              <button onClick={() => handleScroll(item.id)}>{item.label}</button>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
