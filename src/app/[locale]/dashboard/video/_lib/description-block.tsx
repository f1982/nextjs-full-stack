import GenEditForm from './gen-edit-form'
import { updateVideo } from '@/app/[locale]/dashboard/video/_lib/video-actions'
import { generateVideoDescription } from '@/lib/model/video-description'
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
