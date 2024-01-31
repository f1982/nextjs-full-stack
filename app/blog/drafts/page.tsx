import { useSession } from "next-auth/react";
import React from "react";
import prisma from "../../_lib/prisma";
import Post, { PostProps } from "../../_modules/components/Post";
import { auth } from "../../api/auth/[...nextauth]/route";

export const getData = async () => {
  const session = await auth();
  if (!session) {
    res.statusCode = 403;
    return { props: { drafts: [] } };
  }

  const drafts = await prisma.post.findMany({
    where: {
      author: { email: session.user.email },
      published: false,
    },
    include: {
      author: {
        select: { name: true },
      },
    },
  });
  return {
    drafts,
  };
};

type Props = {
  drafts: PostProps[];
};

const Drafts: React.FC<Props> = async (props) => {
  const session = await auth();

  if (!session) {
    return (
      <>
        <h1>My Drafts</h1>
        <div>You need to be authenticated to view this page.</div>
      </>
    );
  }

  const { drafts } = await getData();
  return (
    <>
      <div className="page">
        <h1>My Drafts</h1>
        <main>
          {drafts?.map((post) => (
            <div key={post.id} className="post">
              <Post post={post} />
            </div>
          ))}
        </main>
      </div>
    </>
  );
};

export default Drafts;
