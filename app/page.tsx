import { Navbar } from "./components/Navbar";
import { Hero } from "./components/Hero";
import { ExperienceSection } from "./components/ExperienceSection";
import { ProjectsSection } from "./components/ProjectsSection";
import { ContactForm } from "./components/ContactForm";
import { Footer } from "./components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />

      <main>
        <div className="container">
          <Hero />

          <section id="experience" className="section">
            <h2 className="section-title">Experiencia</h2>
            <p className="section-subtitle">
              Algunos de los roles más relevantes en los que he trabajado,
              construyendo productos reales y manejando entornos de producción.
            </p>
            <ExperienceSection />
          </section>

          <section id="projects" className="section">
            <h2 className="section-title">Proyectos</h2>
            <p className="section-subtitle">
              Proyectos SaaS, APIs y plataformas que he desarrollado usando
              arquitectura limpia, NestJS, React, PostgreSQL, MongoDB y AWS.
            </p>
            <ProjectsSection />
          </section>

          <section id="contact" className="section">
            <h2 className="section-title">Contacto</h2>
            <p className="section-subtitle">
              ¿Buscas a alguien que pueda diseñar la arquitectura, desarrollar
              el backend, el frontend y desplegar en la nube? Escríbeme y lo
              platicamos.
            </p>
            <ContactForm />
          </section>
        </div>
      </main>

      <Footer />
    </>
  );
}
