import { NextResponse } from "next/server";

export async function GET(request: Request) {

  const data = await fetch('http://143.198.192.55:3333/instance/list', {
    cache: 'no-store'
  })
  console.log(data.json())
  console.log(request)

  return NextResponse.json(data)
}
export async function POST(req: Request) {

  const data = await req.json()
  if (data.name === ' ' && data.descricao === '') {
    console.log("vazio")
    throw new Error(" Campos obrigatórios")
  }
  console.log(data)

  return NextResponse.json({ data })
}

