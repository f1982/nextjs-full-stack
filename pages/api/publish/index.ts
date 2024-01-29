import prisma from "../../../lib/prisma";

// PUT /api/publish/:id
export default async function handle(req, res) {
  // console.log("req", req);
  const postId = req.query.id;
  // console.log("req", req);
  console.log("postId", postId);
  const post = await prisma.post.update({
    where: { id: postId },
    data: { published: true },
  });
  res.json(post);
}
