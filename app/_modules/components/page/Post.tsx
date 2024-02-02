'use client'

import { useRouter } from 'next/navigation'
import React from 'react'
import ReactMarkdown from 'react-markdown'

export type PostProps = {
  id: string
  title: string
  author?: {
    name?: string | null
    email?: string | null
  } | null
  content: string | null
  published: boolean
  created_at?: Date | null
  updated_at?: Date | null
}

const Post: React.FC<{ post: PostProps }> = ({ post }) => {
  const authorName = post.author ? post.author.name : 'Unknown author'
  const router = useRouter()
  return (
    <div
      className="border-2 border-gray-300 p-4 rounded-lg hover:border-gray-400 cursor-pointer"
      onClick={() => router.push(`/blog/post/${post.id}`)}>
      <h2>{post.title}</h2>
      <small>By {authorName}</small>
      <ReactMarkdown>{post.content}</ReactMarkdown>
      {post.created_at && <div>Created: {post.created_at.toString()}</div>}
      {post.updated_at && <div>Updated: {post.updated_at.toString()}</div>}
    </div>
  )
}

export default Post
