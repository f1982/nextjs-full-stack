import GenEditForm from './gen-edit-form'
import { generateVideoDescription } from '@/app/_lib/model/video-description'
import { updateVideo } from '@/app/dashboard/video/_lib/video-actions'
import { Video } from '@prisma/client'

export default async function DescriptionBlock({
  videoData
}: {
  videoData: Video
}) {
  const handleSubmission = async (data: any) => {
    'use server'

    return await updateVideo({ description: data.value, id: videoData.id })
  }

  const handleOptionGeneration = async () => {
    'use server'

    const desc = await generateVideoDescription(videoData.topic!)
    return { data: desc, status: 'success' }
  }

  return (
    <>
      <GenEditForm
        fieldName="description"
        value={videoData.description || ''}
        optionsLoader={handleOptionGeneration}
        onSubmit={handleSubmission}
      />
    </>
  )
}
