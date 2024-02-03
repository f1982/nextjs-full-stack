import TopicBlock from '../_lib/topic-block'
import { retrieveVideo } from '../_lib/video-actions'
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger
} from '@/app/_modules/components/ui/tabs'
import Link from 'next/link'
import React from 'react'

export default async function Page({ params }: { params: { id: string } }) {
  const { data: videoData } = await retrieveVideo(params.id)
  console.log('videoData', videoData)
  return (
    <>
      <div className="prose prose-md mb-12">
        <h2>Video Page</h2>
        <p>Topic: {videoData?.topic}</p>
      </div>
      {/* <div className="flex flex-row gap-6">
        <Link href={'/dashboard/video/new'}>New</Link>
        <Link href={'/dashboard/video/edit/video-id-111'}>Edit</Link>
        <Link href={'/dashboard/video/video-id'}>Detail</Link>
      </div> */}
      <Tabs defaultValue="account" className="w-[400px]">
        <TabsList>
          <TabsTrigger value="topic">Topic</TabsTrigger>
          <TabsTrigger value="metadata">Metadata</TabsTrigger>
          <TabsTrigger value="script">Script</TabsTrigger>
          <TabsTrigger value="posts">Posts</TabsTrigger>
          <TabsTrigger value="comments">Comments</TabsTrigger>
        </TabsList>
        <TabsContent value="topic">
          <TopicBlock videoId={params.id} />
        </TabsContent>
        <TabsContent value="metadata">Change your password here.</TabsContent>
        <TabsContent value="script">Change your password here.</TabsContent>
        <TabsContent value="posts">Change your password here.</TabsContent>
        <TabsContent value="comments">Change your password here.</TabsContent>
      </Tabs>
    </>
  )
}
