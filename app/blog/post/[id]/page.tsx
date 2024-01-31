import ReactMarkdown from "react-markdown";
import { auth } from "../../../_lib/auth-opt";
import prisma from "../../../_lib/prisma";
import DraftPublishButton from "./_lib/publish-button";

const getData = async (params: any): Promise<{ post: any }> => {
  const post = await prisma.post.findUnique({
    where: {
      id: String(params?.id),
    },
    include: {
      author: {
        select: { name: true, email: true },
      },
    },
  });
  return { post };
};

export default async function Page({ params }: { params: { id: string } }) {
  const session = await auth();
  // if (status === "loading") {
  //   return <div>Authenticating ...</div>;
  // }
  const userHasValidSession = Boolean(session);

  const { post } = await getData(params);
  const postBelongsToUser = session?.user?.email === post.author?.email;

  let title = post.title;
  if (!post.published) {
    title = `${title} (Draft)`;
  }

  return (
    <>
      <h2>{title}</h2>
      <p>By {post?.author?.name || "Unknown author"}</p>
      <ReactMarkdown children={post.content} />
      {!post.published && userHasValidSession && postBelongsToUser && (
        <DraftPublishButton postId={post.id} />
      )}
    </>
  );
}
