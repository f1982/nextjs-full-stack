import Link from 'next/link'
import React from 'react'

export default function Page() {
  return (
    <>
      <div className="prose prose-md mb-12">
        <h2>Video Page</h2>
        <p>
          Ullam sit in in adipisci veritatis. Et ipsa incidunt alias et quia
          occaecati debitis iusto. Quaerat perspiciatis quibusdam enim
          doloremque facere excepturi consequatur reiciendis. Minus officia quas
          aut laborum eius consectetur. Voluptas dolore in assumenda
          voluptatibus velit quas.
        </p>
      </div>
      <div className="flex flex-row gap-6">
        <Link href={'/dashboard/video/new'}>New</Link>
        <Link href={'/dashboard/video/edit/video-id-111'}>Edit</Link>
        <Link href={'/dashboard/video/video-id'}>Detail</Link>
      </div>
    </>
  )
}
