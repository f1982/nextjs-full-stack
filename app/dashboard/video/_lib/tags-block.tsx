import GenEditForm from './gen-edit-form'
import { generateVideoTags } from '@/app/_lib/model/video-tags'
import { updateVideo } from '@/app/dashboard/video/_lib/video-actions'
import { Video } from '@prisma/client'

export default async function TagsBlock({ videoData }: { videoData: Video }) {
  const handleSubmission = async (data: any) => {
    'use server'

    return await updateVideo({ tags: data.value, id: videoData.id })
  }

  const handleOptionGeneration = async () => {
    'use server'

    const desc = await generateVideoTags(videoData.topic!)
    return { data: desc, status: 'success' }
  }

  return (
    <>
      <GenEditForm
        fieldName="tags"
        value={videoData.tags || ''}
        optionsLoader={handleOptionGeneration}
        onSubmit={handleSubmission}
      />
    </>
  )
}
