import { NextResponse } from "next/server";
import { featuredProjects } from "../../data/portfolio";

export async function GET() {
  return NextResponse.json(featuredProjects);
}
