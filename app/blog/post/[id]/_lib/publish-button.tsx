'use client'

import { useRouter } from 'next/navigation'

export default function DraftPublishButton({ postId }) {
  const router = useRouter()

  async function publishPost(id: string): Promise<void> {
    await fetch(`/api/publish/?id=${id}`, {
      method: 'PUT'
    })
    router.push('/blog')
  }

  return (
    <>
      <button onClick={() => publishPost(postId)}>Publish</button>
    </>
  )
}
