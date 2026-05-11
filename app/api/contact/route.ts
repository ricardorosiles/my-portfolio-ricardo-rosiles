import { NextResponse } from "next/server";

export async function POST(request: Request) {
  const body = await request.json().catch(() => null);

  if (!body?.name || !body?.email || !body?.message) {
    return NextResponse.json(
      { error: "name, email y message son obligatorios" },
      { status: 400 }
    );
  }

  return NextResponse.json({
    ok: true,
    message: "Mensaje recibido. Configura aquí el envío por email o almacenamiento si lo necesitas.",
  });
}
