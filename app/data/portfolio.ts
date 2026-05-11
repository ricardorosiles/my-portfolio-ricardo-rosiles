export type Skill = {
  name: string;
  icon: string;
  category: "Backend" | "Frontend" | "Cloud & DevOps" | "Database" | "Architecture" | "Tools";
};

export const profile = {
  name: "Brayan Ricardo Rosiles Sánchez",
  shortName: "Ricardo Rosiles",
  role: "Full Stack Developer",
  location: "México",
  email: "ricardo.rosiles97@gmail.com",
  whatsapp: "+52 55 1501 7945",
  github: "https://github.com/ricardorosiles",
  portfolio: "https://my-portfolio-ricardo-rosiles.vercel.app",
  summary:
    "Desarrollador Full Stack con experiencia creando microservicios, PWAs, integraciones empresariales, automatización de procesos y plataformas cloud para sectores como retail, salud, finanzas e inmobiliario.",
};

export const stats = [
  { value: "+6", label: "años de experiencia" },
  { value: "Full Stack", label: "frontend, backend y cloud" },
  { value: "Cloud", label: "AWS, GCP, Azure y Docker" },
];

export const skills: Skill[] = [
  { name: "Java", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg", category: "Backend" },
  { name: "JavaScript", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg", category: "Backend" },
  { name: "TypeScript", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg", category: "Backend" },
  { name: "Python", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg", category: "Backend" },
  { name: "Node.js", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg", category: "Backend" },
  { name: "NestJS", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nestjs/nestjs-original.svg", category: "Backend" },
  { name: "Spring Boot", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/spring/spring-original.svg", category: "Backend" },
  { name: "FastAPI", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/fastapi/fastapi-original.svg", category: "Backend" },
  { name: "React", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg", category: "Frontend" },
  { name: "Next.js", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg", category: "Frontend" },
  { name: "Angular", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/angularjs/angularjs-original.svg", category: "Frontend" },
  { name: "Vue.js", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vuejs/vuejs-original.svg", category: "Frontend" },
  { name: "AWS", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-original-wordmark.svg", category: "Cloud & DevOps" },
  { name: "Google Cloud", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/googlecloud/googlecloud-original.svg", category: "Cloud & DevOps" },
  { name: "Azure", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/azure/azure-original.svg", category: "Cloud & DevOps" },
  { name: "Docker", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg", category: "Cloud & DevOps" },
  { name: "Kubernetes", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/kubernetes/kubernetes-plain.svg", category: "Cloud & DevOps" },
  { name: "MySQL", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg", category: "Database" },
  { name: "PostgreSQL", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg", category: "Database" },
  { name: "Oracle", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/oracle/oracle-original.svg", category: "Database" },
  { name: "MongoDB", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg", category: "Database" },
  { name: "Redis", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redis/redis-original.svg", category: "Database" },
  { name: "Git", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg", category: "Tools" },
  { name: "Grafana", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/grafana/grafana-original.svg", category: "Tools" },
];

export const architectureSkills = [
  "Microservicios",
  "Arquitectura Hexagonal",
  "DDD",
  "SOLID",
  "Clean Code",
  "SCRUM",
  "ELK Stack",
  "Prometheus",
  "SonarQube",
];

export const experiences = [
  {
    company: "Quantum",
    role: "Desarrollador FullStack",
    period: "Junio 2025 – Diciembre 2025",
    highlight: "Odoo · SAT · IA · Automatización financiera",
    description:
      "Migración de Odoo v14 a v18, modernización de módulos de facturación, contabilidad y pagos. Desarrollo de microservicios en NestJS para carga masiva de facturas, validación de CFDIs, registro de pagos ante SAT y generación automática de Memorandum financiero con IA.",
    tech: ["NestJS", "Node.js", "AWS", "MongoDB", "MySQL", "IA"],
  },
  {
    company: "Multiplica",
    role: "Desarrollador FullStack",
    period: "Marzo 2024 – Junio 2025",
    highlight: "PWA · Salud · Retail · Microservicios",
    description:
      "Desarrollo de PWAs para canje de promociones y plataformas de salud. Integración con Java, Maven, SQS, microservicios, Oracle, MongoDB, AWS y Lambdas.",
    tech: ["TypeScript", "Java", "PostgreSQL", "AWS", "MongoDB"],
  },
  {
    company: "Axity",
    role: "Desarrollador Frontend",
    period: "Septiembre 2023 – Agosto 2024",
    highlight: "Chedraui · VTEX · TypeScript",
    description:
      "Mejoras de calidad de código en app Chedraui, componentes específicos, seguridad en comunicación con APIs y migración de JavaScript a TypeScript.",
    tech: ["VTEX", "TypeScript", "JavaScript", "Frontend"],
  },
  {
    company: "NTT DATA",
    role: "Desarrollador Full Stack",
    period: "Julio 2021 – Agosto 2023",
    highlight: "Apps internacionales · Marketplace · Web scraping",
    description:
      "Participación en proyectos como Cancer Buddy, OEIO, BVD Solutions y G-Square. Desarrollo de funcionalidades full stack y automatización de extracción de datos mediante web scraping.",
    tech: ["React", "Node.js", "APIs", "Web Scraping"],
  },
  {
    company: "Grupo GFT",
    role: "Desarrollador Frontend",
    period: "Mayo 2020 – Julio 2021",
    highlight: "Santander App · Angular · Calidad",
    description:
      "Mejoras de calidad de código, pruebas unitarias, migración de componentes, actualización de Angular, estilos e integración con servicios externos para aplicación bancaria.",
    tech: ["Angular", "TypeScript", "Testing", "Banking"],
  },
  {
    company: "SpringLabs",
    role: "Desarrollador Backend",
    period: "Mayo 2019 – Julio 2020",
    highlight: "Chatbots · NOM 035 · Dashboard",
    description:
      "Desarrollo de chatbot para Telegram, Facebook, WhatsApp y Web enfocado en NOM 035, además de dashboard para medición de estrés laboral y administración de cuestionarios.",
    tech: ["Backend", "Chatbots", "Dashboards", "APIs"],
  },
];

export const featuredProjects = [
  {
    name: "Automatización de facturas y pagos SAT",
    type: "Enterprise automation",
    description:
      "Microservicios para carga masiva de facturas, validación CFDI, registro de pagos y sincronización de datos operativos con Odoo.",
    tech: ["NestJS", "Odoo", "SAT", "MySQL", "MongoDB"],
  },
  {
    name: "Master File + Memorandum con IA",
    type: "AI document generation",
    description:
      "Pipeline para procesar Excel/CSV, extraer datos financieros clave y generar documentos automáticos con apoyo de IA.",
    tech: ["Node.js", "NestJS", "AWS S3", "Lambda", "IA"],
  },
  {
    name: "Más Salud",
    type: "Health PWA",
    description:
      "PWA para consultas rápidas, pruebas médicas y estudios, integrada con microservicios y servicios cloud.",
    tech: ["Java", "Maven", "AWS", "Oracle", "MongoDB"],
  },
  {
    name: "G-Square",
    type: "Real estate / Storage platform",
    description:
      "Aplicación para renta de bodegas con extracción automática de información mediante web scraping para análisis competitivo.",
    tech: ["Full Stack", "Web Scraping", "APIs", "Analytics"],
  },
];
