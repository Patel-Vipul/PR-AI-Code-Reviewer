"use server";

import { prisma } from "@/lib/prisma_client";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const body = await req.json();

    const result = await prisma.test.create({
      data: {
        name: body.name,
      },
    });

    return NextResponse.json(result, { status: 201 });
  } catch (error) {
    console.error(error);
    return NextResponse.json(
      { message: "failed to create record" },
      { status: 500 },
    );
  }
}

export async function GET() {
  try {
    const result = await prisma.test.findMany();

    return NextResponse.json(
      {
        result,
      },
      {
        status: 200,
      },
    );
  } catch (error) {
    console.error(error);
    return NextResponse.json(
      {
        message: "error while fetching data",
      },
      {
        status: 401,
      },
    );
  }
}
