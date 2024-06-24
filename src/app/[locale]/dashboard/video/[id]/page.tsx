import { ServerError } from '@/components/molecule/server-error'

import { retrieveVideo } from '@/features/video-meta/actions/video-actions'

export default async function Page({ params }: { params: { id: string } }) {
  const { status, data: videoData } = await retrieveVideo(params.id)

  if (status === 'failure' || !videoData) {
    return <ServerError message=""></ServerError>
  }
  return (
    <>
      <div className="prose-md prose mb-12">
        <h2>Video Page</h2>
        <p>{JSON.stringify(videoData)}</p>
      </div>

      {/* <Tabs defaultValue="topic">
        <TabsList>
          <TabsTrigger value="overall">Overall</TabsTrigger>
          <TabsTrigger value="topic">Topic</TabsTrigger>
          <TabsTrigger value="metadata">Metadata</TabsTrigger>
          <TabsTrigger value="script">Script</TabsTrigger>
          <TabsTrigger value="posts">Posts</TabsTrigger>
          <TabsTrigger value="comments">Comments</TabsTrigger>
        </TabsList>

        <TabsContent value="overall">
          <div>
            <p>{JSON.stringify(videoData)}</p>
          </div>
        </TabsContent>
        <TabsContent value="topic">
          <TopicBlock videoId={params.id} />
        </TabsContent>

        <TabsContent value="metadata">
          <div className="flex flex-col gap-6">
            <div className="prose-md prose">
              <h2>Create new video</h2>
              <p>Start a new video by adding a topic.</p>
              <Separator className="mb-6" />
            </div>

            <TitleBlock videoData={videoData} />
            <DescriptionBlock videoData={videoData} />
            <TagsBlock videoData={videoData} />
          </div>
        </TabsContent>
        <TabsContent value="script">
          <ScriptHookBlock videoData={videoData} />
          <ScriptQuotesBlock videoData={videoData} />
          <ScriptOutlineBlock videoData={videoData} />
          <ScriptEndingBlock videoData={videoData} />
        </TabsContent>
        <TabsContent value="posts">
          <PostUpdatesBlock videoData={videoData} />.
        </TabsContent>
        <TabsContent value="comments">Change your password here.</TabsContent>
      </Tabs> */}
    </>
  )
}
