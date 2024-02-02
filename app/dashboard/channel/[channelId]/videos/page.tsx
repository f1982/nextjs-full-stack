import Link from 'next/link'
import React from 'react'

export default function Page({
  params
}: {
  params: { channelId: string; id: string }
}) {
  return (
    <div className="container">
      <div>Video detail channelId : {params.channelId}</div>
      <div>Video detail Page : {params.id}</div>
    </div>
  )
}
