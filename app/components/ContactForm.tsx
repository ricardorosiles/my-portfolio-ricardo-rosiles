import { profile } from "../data/portfolio";

export function ContactForm() {
  return (
    <div className="contact-grid">
      <div className="contact-card">
        <p className="contact-eyebrow">Contacto directo</p>
        <h3>Hablemos de tu proyecto o vacante</h3>
        <p>
          Puedo ayudarte con backend, frontend, microservicios, cloud, integraciones empresariales y automatización de procesos.
        </p>
        <div className="contact-actions">
          <a className="btn-primary" href={`mailto:${profile.email}`}>Enviar correo</a>
          <a className="btn-secondary" href="https://wa.me/5215515017945" target="_blank" rel="noreferrer">WhatsApp</a>
        </div>
      </div>

      <div className="contact-info-card">
        <div>
          <span>Email</span>
          <a href={`mailto:${profile.email}`}>{profile.email}</a>
        </div>
        <div>
          <span>GitHub</span>
          <a href={profile.github} target="_blank" rel="noreferrer">github.com/ricardorosiles</a>
        </div>
        <div>
          <span>Ubicación</span>
          <p>{profile.location}</p>
        </div>
      </div>
    </div>
  );
}
