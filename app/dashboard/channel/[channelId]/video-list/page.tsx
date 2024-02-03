import Link from 'next/link'
import React from 'react'

export default function Page({ params }: { params: { channelId: string } }) {
  console.log('params', params)
  console.log('channelId', params.channelId)
  return (
    <div className="container">
      <div>Channel ID: {params.channelId}</div>
      <div>
        <Link href={'/dashboard/video/test-video-id'}>A vidoe </Link>
      </div>
    </div>
  )
}
