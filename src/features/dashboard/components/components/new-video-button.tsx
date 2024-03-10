import Link from 'next/link'
import React from 'react'

export default function NewVideoButton({ channelId }: { channelId: string }) {
  return (
    <div>
      <Link href={`/dashboard/channel/${channelId}/video-new`}>
        Create new video{' '}
      </Link>
    </div>
  )
}
