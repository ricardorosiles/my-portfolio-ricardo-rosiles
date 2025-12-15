"use client";

import { useEffect, useState } from "react";

type Project = {
  id: number;
  name: string;
  description: string;
  tech: string[];
  link?: string | null;
};

export function ProjectsSection() {
  const [projects, setProjects] = useState<Project[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const load = async () => {
      try {
        const res = await fetch("/api/projects");
        if (!res.ok) throw new Error("Error al obtener proyectos");
        const data = await res.json();
        setProjects(data);
      } catch (err) {
        console.error(err);
        setError("No se pudieron cargar los proyectos");
      } finally {
        setLoading(false);
      }
    };
    load();
  }, []);

  if (loading) return <p className="text-gray-400">Cargando proyectos...</p>;
  if (error) return <p className="text-red-400">{error}</p>;

  return (
    <section id="projects" className="section">
      <h2 className="section-title">Proyectos</h2>
      <div className="grid">
        {projects.map((p) => (
          <div key={p.id} className="card">
            <h3>{p.name}</h3>
            <p className="project-description">{p.description}</p>
            <div className="tags">
              {p.tech.map((t) => (
                <span key={t} className="tag">
                  {t}
                </span>
              ))}
            </div>
            {p.link && (
              <a
                href={p.link}
                target="_blank"
                rel="noreferrer"
                className="project-link"
              >
                Ver proyecto
              </a>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}
