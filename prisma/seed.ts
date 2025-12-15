// prisma/seed.ts
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
  console.log("🌱 Iniciando seed...");

  // 1️⃣ Limpiamos las tablas (opcional)
  await prisma.contactMessage.deleteMany();
  await prisma.experience.deleteMany();
  await prisma.project.deleteMany();

  // 2️⃣ Insertamos proyectos
  await prisma.project.createMany({
    data: [
      {
        name: "Sistema de Inventario",
        description:
          "API REST con Node.js/NestJS, PostgreSQL y despliegue en AWS.",
        tech: "Node.js,NestJS,PostgreSQL,AWS",
        link: "https://github.com/tuusuario/sistema-inventario",
      },
      {
        name: "SaaS Médico Modular",
        description:
          "SaaS para consultorios médicos con módulos para cada especialidad.",
        tech: "Next.js,React,NestJS,MongoDB,AWS",
        link: "https://github.com/tuusuario/saas-medico",
      },
      {
        name: "Uber de Profesionistas",
        description:
          "App tipo Uber para solicitar albañiles, plomeros, electricistas, etc.",
        tech: "React Native,Node.js,PostgreSQL,AWS",
        link: "https://github.com/tuusuario/easy-jobs",
      },
    ],
  });

  // 3️⃣ Insertamos experiencia laboral
  await prisma.experience.createMany({
    data: [
      {
        company: "Quantum",
        role: "Senior Full Stack Developer",
        period: "2023 - Actual",
        description:
          "Microservicios en NestJS, arquitectura hexagonal, Lambdas, DynamoDB, PostgreSQL, reportes con Athena/QuickSight.",
        tech: "NestJS,Node.js,AWS,PostgreSQL,DynamoDB,Microservices",
      },
      {
        company: "Multiplica",
        role: "Full Stack Developer",
        period: "2021 - 2023",
        description:
          "Desarrollo de plataformas web, diseños escalables, integración con APIs y manejo de bases de datos SQL/NoSQL.",
        tech: "React,Next.js,NestJS,PostgreSQL,MongoDB",
      },
    ],
  });

  // 4️⃣ Mensajes de contacto opcionales
  await prisma.contactMessage.createMany({
    data: [
      {
        name: "Juan Pérez",
        email: "juan@example.com",
        message: "Hola, me gustaría contratar tus servicios.",
      },
      {
        name: "Empresa XYZ",
        email: "hr@xyz.com",
        message: "Estamos interesados en tu perfil.",
      },
    ],
  });

  console.log("🌱 Seed finalizado correctamente ✔️");
}

main()
  .catch((e) => {
    console.error("❌ Error en seed:", e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
