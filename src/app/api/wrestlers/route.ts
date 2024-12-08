import { PrismaClient } from "@prisma/client";
import { NextResponse } from "next/server";

export async function GET() {
  const db = new PrismaClient();
  const wrestlers = await db.wrestler.findMany();
  console.log(wrestlers);

  return NextResponse.json(wrestlers);
}
