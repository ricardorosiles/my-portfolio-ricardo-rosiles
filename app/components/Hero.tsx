"use client";

import { profile, stats } from "../data/portfolio";

export function Hero() {
  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <section id="hero" className="hero-section">
      <div className="hero-grid">
        <div className="hero-copy">
          <div className="availability-pill">
            <span /> Disponible para proyectos Full Stack / Backend
          </div>

          <p className="hero-text-eyebrow">{profile.role} · {profile.location}</p>
          <h1 className="hero-title">
            Construyo productos digitales <span>escalables, limpios y listos para producción.</span>
          </h1>

          <p className="hero-description">{profile.summary}</p>

          <div className="hero-actions">
            <button className="btn-primary" onClick={() => scrollTo("projects")}>Ver proyectos</button>
            <a className="btn-secondary" href={`mailto:${profile.email}`}>Contactarme</a>
          </div>

          <div className="hero-socials">
            <a href={profile.github} target="_blank" rel="noreferrer">GitHub</a>
            <a href={profile.portfolio} target="_blank" rel="noreferrer">Portfolio actual</a>
            <a href={`https://wa.me/5215515017945`} target="_blank" rel="noreferrer">WhatsApp</a>
          </div>
        </div>

        <aside className="hero-panel" aria-label="Resumen profesional">
          <div className="hero-avatar-card">
            <div className="avatar-orbit">
              <div className="avatar-core">RR</div>
            </div>
            <h2>{profile.shortName}</h2>
            <p>Full Stack · Microservicios · Cloud</p>
          </div>

          <div className="stats-grid">
            {stats.map((stat) => (
              <div className="stat-card" key={stat.label}>
                <strong>{stat.value}</strong>
                <span>{stat.label}</span>
              </div>
            ))}
          </div>
        </aside>
      </div>
    </section>
  );
}
