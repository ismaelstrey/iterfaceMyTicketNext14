import { prisma } from "@/lib/prisma";
import { NextResponse } from "next/server";

export async function GET(request: Request) {
  const data = await prisma.tecnicoTipo.findMany({
    select: {
      id: true,
      name: true,
    },
  });

  return NextResponse.json(data);
}
export async function POST(req: Request) {
  const data = await req.json();
  console.log(data);

  const salva = await prisma.tecnicoTipo.create({ data });

  return NextResponse.json(salva);
}

