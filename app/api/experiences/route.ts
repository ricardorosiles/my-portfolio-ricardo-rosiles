import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

const MONTHS_ES: Record<string, number> = {
  Enero: 0,
  Febrero: 1,
  Marzo: 2,
  Abril: 3,
  Mayo: 4,
  Junio: 5,
  Julio: 6,
  Agosto: 7,
  Septiembre: 8,
  Octubre: 9,
  Noviembre: 10,
  Diciembre: 11,
};

function extractDateFromPart(part: string | undefined | null): Date {
  if (!part) {
    return new Date(1970, 0, 1);
  }

  const trimmed = part.trim();

  if (/^actual$/i.test(trimmed)) return new Date();

  const normalized = trimmed
    .replace(/–/g, "")
    .replace(/\s+de\s+/i, " ")
    .replace(/\s+/g, " ")
    .trim();

  const tokens = normalized.split(" ");
  const yearToken = tokens.find((t) => /^\d{4}$/.test(t));
  const monthToken = tokens.find((t) => MONTHS_ES[t] !== undefined);

  if (!yearToken || !monthToken) return new Date(1970, 0, 1);

  const year = Number(yearToken);
  const monthIndex = MONTHS_ES[monthToken];

  return new Date(year, monthIndex, 1);
}

function parsePeriod(period: string | null | undefined) {
  if (!period) {
    const fallback = new Date(1970, 0, 1);
    return { start: fallback, end: fallback };
  }

  const normalized = period.replace(/–/g, "-");

  const [startPart, endPartRaw] = normalized.split("-");
  const endPart = endPartRaw ?? "Actual";

  const startDate = extractDateFromPart(startPart);
  const endDate = extractDateFromPart(endPart);

  return { start: startDate, end: endDate };
}

// GET: listar experiencias
export async function GET() {
  try {
    const experiences = await prisma.experience.findMany();

    const sorted = experiences.sort((a, b) => {
      const aParsed = parsePeriod(a.period);
      const bParsed = parsePeriod(b.period);

      if (aParsed.start.getTime() !== bParsed.start.getTime()) {
        return bParsed.start.getTime() - aParsed.start.getTime();
      }

      return bParsed.end.getTime() - aParsed.end.getTime();
    });

    const result = sorted.map((e) => ({
      id: e.id,
      company: e.company,
      role: e.role,
      period: e.period,
      description: e.description,
      tech: e.tech.split(",").map((t) => t.trim()),
      createdAt: e.createdAt,
    }));

    return NextResponse.json(result);
  } catch (error) {
    console.error("Error GET /api/experiences", error);
    return new NextResponse("Internal Server Error", { status: 500 });
  }
}

// POST: crear una nueva experiencia
export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { company, role, period, description, tech } = body;

    if (!company || !role || !period || !description || !tech) {
      return NextResponse.json(
        { error: "company, role, period, description y tech son obligatorios" },
        { status: 400 }
      );
    }

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
