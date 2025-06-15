import prisma from "@/lib/prisma";
import { NextResponse } from "next/server";

// Get All Agents
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

// New Agent
export async function POST(request: Request) {
  try {
    const { name } = await request.json();
    const agent = await prisma.agent.findFirst({
      where: { name: name.trim() },
    });
    return NextResponse.json({ exists: !!agent }, { status: 200 });
  } catch (error) {
    return NextResponse.json(
      { error: "Failed to create agent" },
      { status: 500 }
    );
  }
}
