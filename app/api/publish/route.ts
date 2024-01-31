import { NextRequest, NextResponse } from "next/server";
import prisma from "../../_lib/prisma";
import { auth } from "../auth/[...nextauth]/route";

export async function PUT(req: NextRequest, res: NextResponse) {
  const id = req.nextUrl.searchParams.get("id");
  if (!id) {
    return Response.json({ message: "No post id provided." });
  }

  const session = await auth();
  if (!session) {
    return Response.json({ message: "You must be logged in.", status: 401 });
  }

  const post = await prisma.post.update({
    where: { id },
    data: { published: true },
  });
  return Response.json(post);
}
