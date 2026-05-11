import { NextResponse } from "next/server";
import { experiences } from "../../data/portfolio";

export async function GET() {
  return NextResponse.json(experiences);
}
