import { Navbar } from "./components/Navbar";
import { Hero } from "./components/Hero";
import { ExperienceSection } from "./components/ExperienceSection";
import { ProjectsSection } from "./components/ProjectsSection";
import { SkillsSection } from "./components/SkillsSection";
import { ContactForm } from "./components/ContactForm";
import { Footer } from "./components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />

        <section id="experience" className="section container">
          <div className="section-heading">
            <p className="section-kicker">Trayectoria</p>
            <h2 className="section-title">Experiencia laboral</h2>
            <p className="section-subtitle">
              Experiencia construyendo productos reales, integraciones empresariales, PWAs, microservicios y soluciones cloud.
            </p>
          </div>
          <ExperienceSection />
        </section>

        <section id="skills" className="section container">
          <div className="section-heading">
            <p className="section-kicker">Tech stack</p>
            <h2 className="section-title">Skills con enfoque full stack</h2>
            <p className="section-subtitle">
              Tecnologías que uso para diseñar, construir, desplegar y mantener soluciones modernas y escalables.
            </p>
          </div>
          <SkillsSection />
        </section>

        <section id="projects" className="section container">
          <div className="section-heading">
            <p className="section-kicker">Casos destacados</p>
            <h2 className="section-title">Proyectos relevantes</h2>
            <p className="section-subtitle">
              Selección de proyectos basados en automatización, aplicaciones empresariales, salud, retail, IA y plataformas digitales.
            </p>
          </div>
          <ProjectsSection />
        </section>

        <section id="contact" className="section container">
          <div className="section-heading">
            <p className="section-kicker">Contacto</p>
            <h2 className="section-title">Trabajemos juntos</h2>
            <p className="section-subtitle">
              Disponible para colaborar en proyectos full stack, backend, frontend, microservicios y cloud.
            </p>
          </div>
          <ContactForm />
        </section>
      </main>
      <Footer />
    </>
  );
}
