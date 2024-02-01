import Link from 'next/link'
import React from 'react'

export default function Page() {
  return (
    <div className="container">
      <div>Video Page</div>
      <div>
        <Link href={'/dashboard/video/test-video-id'}>A vidoe </Link>
      </div>
    </div>
  )
}
