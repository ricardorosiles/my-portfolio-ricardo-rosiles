import { experiences } from "../data/portfolio";

export function ExperienceSection() {
  return (
    <div className="timeline">
      {experiences.map((experience) => (
        <article key={`${experience.company}-${experience.period}`} className="experience-card">
          <div className="experience-header">
            <div>
              <p className="experience-company">{experience.company}</p>
              <h3>{experience.role}</h3>
            </div>
            <span>{experience.period}</span>
          </div>

          <p className="experience-highlight">{experience.highlight}</p>
          <p className="experience-description">{experience.description}</p>

          <div className="tags">
            {experience.tech.map((tech) => (
              <span key={tech} className="tag">{tech}</span>
            ))}
          </div>
        </article>
      ))}
    </div>
  );
}
