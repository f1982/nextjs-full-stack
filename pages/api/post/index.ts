// "use server";

import prisma from "../../../lib/prisma";
import { auth } from "../auth/[...nextauth]";

export default async function handle(req, res) {
  const { title, content } = req.body;

  const session = await auth(req, res);
  if (!session) {
    res.status(401).json({ message: "You must be logged in." });
    return;
  }

  const result = await prisma.post.create({
    data: {
      title: title,
      content: content,
      author: { connect: { email: session?.user?.email } },
    },
  });
  return res.json(result);
}
