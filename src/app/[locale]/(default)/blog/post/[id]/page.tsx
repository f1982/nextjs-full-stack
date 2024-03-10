import DraftPublishButton from '@/features/blog/components/publish-button'
import { auth } from '../../../../../../config/auth-settings'
import prisma from '../../../../../../lib/prisma'
import clsx from 'clsx'
import ReactMarkdown from 'react-markdown'

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
  })
  return { post }
}

export default async function Page({ params }: { params: { id: string } }) {
  const session = await auth()
  const userHasValidSession = Boolean(session)

  const { post } = await getData(params)
  const postBelongsToUser = session?.user?.email === post.author?.email

  let title = post.title
  if (!post.published) {
    title = `${title} (Draft)`
  }

  return (
    <div
      className={clsx(
        'flex cursor-pointer flex-col gap-3 rounded-lg border-2 border-gray-300  p-4 hover:border-gray-400',
      )}>
      <h2 className="text-xl">{title}</h2>
      <p>By {post?.author?.name || 'Unknown author'}</p>
      <ReactMarkdown>{post.content}</ReactMarkdown>
      {!post.published && userHasValidSession && postBelongsToUser && (
        <DraftPublishButton postId={post.id} />
      )}
    </div>
  )
}
