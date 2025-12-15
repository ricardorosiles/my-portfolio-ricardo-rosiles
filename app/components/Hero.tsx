"use client";

import React from "react";

export function Hero() {
  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (!el) return;
    el.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <section id="hero" className="section">
      <div className="hero">
        {/* LADO TEXTO */}
        <div>
          <p className="hero-text-eyebrow">DESARROLLADOR FULLSTACK · MÉXICO</p>
          <h1 className="hero-title">
            Hola, Soy <span>Ricardo Rosiles</span>
          </h1>

          <p className="hero-role">
            Desarrollador Full Stack · Node.js · NestJS · React · AWS · SaaS
          </p>

          <p className="hero-description">
            Desarrollador con +5 años de experiencia construyendo APIs,
            microservicios y productos SaaS para sectores como salud, finanzas e
            inmobiliario. Especializado en arquitectura limpia, NestJS,
            PostgreSQL, MongoDB y despliegues en AWS / GCP.
          </p>

          <div className="hero-actions">
            <button
              className="btn-primary"
              onClick={() => scrollTo("projects")}
            >
              Ver proyectos destacados
            </button>

            <button
              className="btn-secondary"
              onClick={() => scrollTo("contact")}
            >
              Hablemos de un proyecto
            </button>
          </div>
        </div>

        {/* LADO AVATAR */}
        <div className="hero-avatar-wrapper">
          <div className="hero-avatar">
            <div className="hero-avatar-inner">
              <div className="hero-avatar-initials">RR</div>
              <div className="hero-avatar-tag">Full Stack / Cloud</div>
            </div>
            <span className="hero-avatar-dot" />
          </div>
        </div>
      </div>
    </section>
  );
}
