// "use server";

import { NextRequest, NextResponse } from "next/server";
import prisma from "../../_lib/prisma";
import { auth } from "../auth/[...nextauth]/route";

export async function POST(req: NextRequest, res: NextResponse) {
  const { title, content } = await req.json();

  const session = await auth();
  if (!session) {
    return Response.json({ message: "You must be logged in.", status: 401 });
  }

  const result = await prisma.post.create({
    data: {
      title: title,
      content: content,
      author: { connect: { email: session?.user?.email } },
    },
  });
  return Response.json(result);
}

export async function GET(request: Request) {
  return { data: "hi" };
}
