import Link from 'next/link'
import React from 'react'

export default function Page({ params }: { params: { id: string } }) {
  return (
    <div className="container">
      <div>Video detail Page : {params.id}</div>
    </div>
  )
}
