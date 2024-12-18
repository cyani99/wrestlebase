import { PrismaClient } from "@prisma/client";
import { NextResponse } from "next/server";

export async function GET() {
  const db = new PrismaClient();
  const ppv = await db.pPV.findMany();
  console.log(ppv);

  return NextResponse.json(ppv);
}
