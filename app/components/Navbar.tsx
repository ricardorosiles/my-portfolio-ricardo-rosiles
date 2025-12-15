"use client";

const navItems = [
  { id: "hero", label: "Inicio" },
  { id: "experience", label: "Experiencia" },
  { id: "projects", label: "Proyectos" },
  { id: "contact", label: "Contacto" },
];

export function Navbar() {
  const handleScroll = (id: string) => {
    const el = document.getElementById(id);
    if (!el) return;
    el.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <header className="navbar">
      <div className="navbar-logo">R. Rosiles</div>
      <ul className="navbar-links">
        {navItems.map((item) => (
          <li key={item.id} onClick={() => handleScroll(item.id)}>
            {item.label}
          </li>
        ))}
      </ul>
    </header>
  );
}
