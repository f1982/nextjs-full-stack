import { createPost } from '../../../../../features/blog/api/create-actions'
import { AddForm } from '../../../../../features/blog/components/form'
import { getDraftData } from '../../../../../features/blog/api/loader'
import Post from '@/components/page/post-item'
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
