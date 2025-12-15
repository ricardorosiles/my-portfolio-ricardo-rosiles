"use client";

import { useEffect, useState } from "react";

type Experience = {
  id: number;
  company: string;
  role: string;
  period: string;
  description: string;
  tech: string[];
};

export function ExperienceSection() {
  const [experiences, setExperiences] = useState<Experience[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const load = async () => {
      try {
        const res = await fetch("/api/experiences");
        if (!res.ok) throw new Error("Error al obtener experiencias");
        const data = await res.json();
        setExperiences(data);
      } catch (err) {
        console.error(err);
        setError("No se pudieron cargar las experiencias");
      } finally {
        setLoading(false);
      }
    };
    load();
  }, []);

  if (loading) return <p className="text-gray-400">Cargando experiencia...</p>;
  if (error) return <p className="text-red-400">{error}</p>;

  return (
    <section id="experience" className="section">
      <h2 className="section-title">Experiencia Laboral</h2>
      <div className="section-content">
        {experiences.map((e) => (
          <div key={e.id} className="card">
            <h3>{e.role}</h3>
            <p className="experience-company">{e.company}</p>
            <p className="experience-period">{e.period}</p>
            <p className="experience-description">{e.description}</p>
            <div className="tags">
              {e.tech.map((t) => (
                <span key={t} className="tag">
                  {t}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
