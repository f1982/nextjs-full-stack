import { createPost } from './_lib/actions'
import { AddForm } from './_lib/form'
import { getDraftData } from './_lib/loader'
import Post from '@/app/_modules/components/page/Post'
import React from 'react'

export default async function Page() {
  const drafts = (await getDraftData()) as any[]
  return (
    <>
      <div className="container mb-6">
        <AddForm submitAction={createPost} />
      </div>
      <div className="container flex flex-col gap-3">
        {drafts?.map((post) => <Post key={post.id} post={post} />)}
      </div>
    </>
  )
}
