import Post, { PostProps } from "../_modules/components/Post";
import prisma from "../_lib/prisma";
import { getDateTime } from "../_lib/utils";
import Link from "next/link";

type Props = {
  feed: PostProps[];
  updateTime: string;
};

const getData = async () => {
  const feed = await prisma.post.findMany({
    where: { published: true },
    include: {
      author: {
        select: { name: true },
      },
    },
    orderBy: {
      title: "asc",
    },
  });
  return { feed, updateTime: getDateTime() };
};

export default async function Page() {
  const { feed, updateTime } = await getData();
  return (
    <>
      <div className="page">
        <h1>Public Feed</h1>
        <main>
          {feed.map((post) => (
            <div key={post.id} className="post">
              <Post post={post} />
            </div>
          ))}
        </main>
      </div>
      <p>{updateTime}</p>
    </>
  );
}

// export default Blog;
