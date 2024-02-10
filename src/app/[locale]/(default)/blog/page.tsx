import Post from '../../../../components/page/post-item'
import prisma from '../../../../lib/prisma'
import { getDateTime } from '../../../../lib/utils'

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
