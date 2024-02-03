import TopicSelect from '../../_lib/topic-select'
import { createVideoWithTopic } from '../../_lib/video-actions'
import { Separator } from '@/app/_modules/components/ui/separator'

export default function Page({ params }: { params: { channelId: string } }) {
  const topicOpts = [
    'How to make pancakes',
    'Top 10 movies of 2022',
    'Beginners guide to knitting'
  ]

  // const { status, data: videos } = await retrieveVideos(params.channelId)
  return (
    <>
      <div className="prose prose-md mb-12">
        <h2>Create new video</h2>
        <p>Start a new video by adding a topic.</p>
        <p>channelId: {params.channelId}</p>
      </div>

      <Separator className="mb-6" />
      {/* <ListSelector
        options={topicOpts}
        callback={async (opt: any) => {
          'use server'
          console.log('opt', opt)
        }}
      />

      <VideoTopicForm formData={{ topic: 'How to make pancakes' }} /> */}
      <TopicSelect
        topicOptions={topicOpts}
        requestToGenerate={async () => {
          console.log('requestToGenerate')
        }}
        onSubmit={async (data: any) => {
          'use server'
          console.log('video topic:', data)

          return await createVideoWithTopic(
            Object.assign(data, { channel_id: params.channelId })
          )
        }}
      />
    </>
  )
}
