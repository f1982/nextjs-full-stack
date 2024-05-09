import { ServerError } from '@/components/molecule/server-error'
import { Separator } from '@/components/ui/separator'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { retrieveVideo } from '@/features/video-meta/api/video-actions'
import DescriptionBlock from '@/features/video-meta/components/description-block'
import PostUpdatesBlock from '@/features/video-meta/components/post-block'
import TagsBlock from '@/features/video-meta/components/tags-block'
import TitleBlock from '@/features/video-meta/components/titles-block'
import TopicBlock from '@/features/video-meta/components/topic-block'
import ScriptOutlineBlock from '@/features/video-script/components/outline-block'
import ScriptQuotesBlock from '@/features/video-script/components/quotes-block'
import ScriptEndingBlock from '@/features/video-script/components/script-ending-block'
import ScriptHookBlock from '@/features/video-script/components/script-hook-block'

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
