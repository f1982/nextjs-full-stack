import DescriptionBlock from '../_lib/description-block'
import ScriptQuotesBlock from '../_lib/quotes-block'
import ScriptEndingBlock from '../_lib/script-ending-block'
import ScriptHookBlock from '../_lib/script-hook-block'
import TagsBlock from '../_lib/tags-block'
import TitleBlock from '../_lib/titles-block'
import TopicBlock from '../_lib/topic-block'
import { retrieveVideo } from '../_lib/video-actions'
import { ServerError } from '@/app/_modules/components/molecule/server-error'
import { Separator } from '@/app/_modules/components/ui/separator'
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger
} from '@/app/_modules/components/ui/tabs'

export default async function Page({ params }: { params: { id: string } }) {
  const { status, data: videoData } = await retrieveVideo(params.id)

  if (status === 'failure' || !videoData) {
    return <ServerError message=""></ServerError>
  }
  return (
    <>
      <div className="prose prose-md mb-12">
        <h2>Video Page</h2>
        <p>Topic: {videoData?.topic}</p>
      </div>

      <Tabs defaultValue="topic">
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
            <div className="prose prose-md">
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
          <ScriptEndingBlock videoData={videoData} />
        </TabsContent>
        <TabsContent value="posts">Change your password here.</TabsContent>
        <TabsContent value="comments">Change your password here.</TabsContent>
      </Tabs>
    </>
  )
}
