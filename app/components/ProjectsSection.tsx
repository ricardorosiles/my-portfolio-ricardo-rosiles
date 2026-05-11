import { featuredProjects } from "../data/portfolio";

export function ProjectsSection() {
  return (
    <div className="projects-grid">
      {featuredProjects.map((project) => (
        <article key={project.name} className="project-card">
          <p className="project-type">{project.type}</p>
          <h3>{project.name}</h3>
          <p className="project-description">{project.description}</p>
          <div className="tags">
            {project.tech.map((tech) => (
              <span key={tech} className="tag">{tech}</span>
            ))}
          </div>
        </article>
      ))}
    </div>
  );
}
