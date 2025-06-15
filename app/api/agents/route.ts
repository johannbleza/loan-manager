import { NextResponse } from "next/server";
import prisma from "@/lib/prisma";

export async function POST(request: Request) {
  try {
    const { name, email, phone } = await request.json();
    const agent = await prisma.agent.create({
      data: {
        name,
        email: email || null,
        phone: phone || null,
      },
    });
    return NextResponse.json(agent, { status: 201 });
  } catch (error) {
    return NextResponse.json(
      { error: "Failed to create agent" },
      { status: 500 }
    );
  }
}
