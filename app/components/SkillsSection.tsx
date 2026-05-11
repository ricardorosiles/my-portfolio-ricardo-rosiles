import { architectureSkills, skills } from "../data/portfolio";

const categories = ["Backend", "Frontend", "Cloud & DevOps", "Database", "Tools"] as const;

export function SkillsSection() {
  return (
    <div className="skills-layout">
      {categories.map((category) => (
        <section className="skill-category" key={category}>
          <div className="skill-category-header">
            <span />
            <h3>{category}</h3>
          </div>

          <div className="skill-grid">
            {skills
              .filter((skill) => skill.category === category)
              .map((skill) => (
                <div className="skill-card" key={skill.name}>
                  <img src={skill.icon} alt={`${skill.name} logo`} loading="lazy" />
                  <span>{skill.name}</span>
                </div>
              ))}
          </div>
        </section>
      ))}

      <section className="architecture-card">
        <h3>Arquitectura, calidad y metodología</h3>
        <div className="architecture-list">
          {architectureSkills.map((item) => (
            <span key={item}>{item}</span>
          ))}
        </div>
      </section>
    </div>
  );
}
