import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

export async function GET() {
  try {
    const projects = await prisma.project.findMany({
      orderBy: { createdAt: "desc" },
    });

    // Convertimos "tech" string a array en la respuesta
    const result = projects.map((p: { tech: string }) => ({
      ...p,
      tech: p.tech.split(",").map((t: string) => t.trim()),
    }));

    return NextResponse.json(result);
  } catch (error) {
    console.error("Error GET /api/projects", error);
    return new NextResponse("Internal Server Error", { status: 500 });
  }
}

export async function POST(request: Request) {
  console.log("entro");
  try {
    const body = await request.json();
    const { company, role, period, description, tech } = body;

    // Validaciones básicas
    if (!company || !role || !period || !description || !tech) {
      return NextResponse.json(
        {
          error: "company, role, period, description y tech son obligatorios",
        },
        { status: 400 }
      );
    }

    // tech puede venir como string o como array
    const techString = Array.isArray(tech) ? tech.join(",") : String(tech);

    const created = await prisma.experience.create({
      data: {
        company,
        role,
        period,
        description,
        tech: techString,
      },
    });

    // Formateamos la respuesta igual que el GET
    const response = {
      id: created.id,
      company: created.company,
      role: created.role,
      period: created.period,
      description: created.description,
      tech: created.tech.split(",").map((t) => t.trim()),
      createdAt: created.createdAt,
    };

    return NextResponse.json(response, { status: 201 });
  } catch (error) {
    console.error("Error POST /api/experiences", error);
    return new NextResponse("Internal Server Error", { status: 500 });
  }
}
