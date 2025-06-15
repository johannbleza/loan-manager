import { NextResponse } from "next/server";
import prisma from "@/lib/prisma";

// Get All Agent
export async function GET() {
  try {
    const agents = await prisma.agent.findMany();
    return NextResponse.json(agents, { status: 200 });
  } catch (error) {
    return NextResponse.json(
      { error: "Failed to fetch agents" },
      { status: 500 }
    );
  }
}

// Add New Agent
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
    return NextResponse.json(agent, { status: 200 });
  } catch (error) {
    return NextResponse.json(
      { error: "Failed to create agent" },
      { status: 500 }
    );
  }
}
