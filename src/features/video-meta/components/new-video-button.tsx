import React from 'react'

import Link from 'next/link'

import { Button } from '@/components/ui/button'

export default function NewVideoButton({ channelId }: { channelId: string }) {
  return (
    <div>
      <Link href={`/dashboard/channel/${channelId}/video-new`}>
        <Button>Create new video</Button>
      </Link>
    </div>
  )
}
