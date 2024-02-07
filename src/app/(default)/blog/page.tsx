import prisma from '../../_lib/prisma'
import { getDateTime } from '../../_lib/utils'
import Post from '../../_modules/components/page/Post'

const getData = async () => {
  const feed = await prisma.post.findMany({
    where: { published: true },
    include: {
      author: {
        select: { name: true }
      }
    },
    orderBy: {
      title: 'asc'
    }
  })
  return { feed, updateTime: getDateTime() }
}

export default async function Page() {
  const { feed, updateTime } = await getData()
  return (
    <>
      <div className="container">
        <h1>Public Feed</h1>
        <main>
          {feed.map((post) => (
            <div key={post.id} className="mb-3">
              <Post post={post} />
            </div>
          ))}
        </main>
      </div>
      <div className="container">
        <p>{updateTime}</p>
      </div>
    </>
  )
}

// export default Blog;
