import GenEditForm from './gen-edit-form'
import { updateVideo } from '@/app/[locale]/dashboard/video/_lib/video-actions'
import { generateVideoTags } from '@/lib/model/video-tags'
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
