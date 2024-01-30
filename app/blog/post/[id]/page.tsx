import { redirect } from "next/navigation";
import ReactMarkdown from "react-markdown";
import prisma from "../../../_lib/prisma";
import { auth } from "../../../api/auth/[...nextauth]/route";

export const getData = async (params: any): Promise<{ post: any }> => {
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

async function publishPost(id: string): Promise<void> {
  await fetch(`/api/publish/?id=${id}`, {
    method: "PUT",
  });
  redirect("/blog/");
}

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
        <button onClick={() => publishPost(post.id)}>Publish</button>
      )}
    </>
  );
}
