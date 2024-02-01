import { auth } from '@/app/_lib/auth-opt'
import prisma from '@/app/_lib/prisma'

export const getDraftData = async () => {
  const session = await auth()
  if (!session) {
    return { props: { drafts: [] } }
  }

  const drafts = await prisma.post.findMany({
    where: {
      author: { email: session?.user?.email },
      published: false
    },
    include: {
      author: {
        select: { name: true, email: true }
      }
    }
  })
  return drafts
}
