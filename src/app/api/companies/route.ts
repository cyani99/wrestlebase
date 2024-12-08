import { PrismaClient } from "@prisma/client";
import { NextResponse } from "next/server";

export async function GET() {
  const db = new PrismaClient();
  const companies = await db.company.findMany();
  console.log(companies);

  return NextResponse.json(companies);
}
