import { PrismaClient } from "@prisma/client";
import { NextResponse } from "next/server";

export async function GET() {
  const db = new PrismaClient();
  const matches = await db.match.findMany();
  console.log(matches);

  return NextResponse.json(matches);
}
