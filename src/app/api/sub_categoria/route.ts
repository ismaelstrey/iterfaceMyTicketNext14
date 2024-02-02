import { prisma } from "@/lib/prisma";
import { NextResponse } from "next/server";

export async function GET(request: Request) {

  const data = await prisma.subcategoria.findMany({
    select: {
      name: true
    }
  })
  console.log(data)
  return NextResponse.json(data)

}
export async function POST(req: Request) {

  const data = await req.json()
  console.log(data)

  const salva = await prisma.subcategoria.create({ data })

  return NextResponse.json(salva)
}

