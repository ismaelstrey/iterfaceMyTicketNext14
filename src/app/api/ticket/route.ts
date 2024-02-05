import { prisma } from "@/lib/prisma";
import { NextResponse } from "next/server";

export async function GET(request: Request) {
  const data = await prisma.tiket.findMany({
    select: {
      id: true,
      title: true,
      subTitle: true,
      description: true,
      observacao: true,
      prioridade: true,
      status: true,
      categoria: { include: { iiket: true } },
      empresa: { include: { cliente: true } },
      problema_informado: true,
      tecnico: true,
      created_at: true,
    },
  });

  return NextResponse.json(data);
}
export async function POST(req: Request) {
  const data = await req.json();
  console.log(data);

  const salva = await prisma.tiket.create({ data });

  return NextResponse.json(salva);
}
export async function PATCH(req: Request) {
  const data = await req.json();
  console.log(req);

  const salva = await prisma.tiket.create({ data });

  return NextResponse.json(salva);
}
