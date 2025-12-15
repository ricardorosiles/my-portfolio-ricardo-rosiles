import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, email, message } = body;

    if (!name || !email || !message) {
      return NextResponse.json(
        { error: "name, email y message son obligatorios" },
        { status: 400 }
      );
    }

    await prisma.contactMessage.create({
      data: { name, email, message },
    });

    // Aquí podrías disparar un email, Slack, etc.
    return NextResponse.json({ ok: true });
  } catch (error) {
    console.error("Error POST /api/contact", error);
    return new NextResponse("Internal Server Error", { status: 500 });
  }
}
