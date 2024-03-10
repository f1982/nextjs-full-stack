import SelectEditForm from '../../../components/form/select-edit-form'
import { updateVideo } from '@/features/video/api/video-actions'
import { generateVideoTitles } from '@/features/video/api/video-titles'
import { Video } from '@prisma/client'

export default async function TitleBlock({ videoData }: { videoData: Video }) {
  const handleSubmission = async (data: any) => {
    'use server'

    return await updateVideo({ title: data.value, id: videoData.id })
  }

  const handleOptionGeneration = async () => {
    'use server'

    const titleList = await generateVideoTitles(videoData.topic!, 5)
    return { data: titleList, status: 'success' }
  }

  return (
    <SelectEditForm
      fieldName="title"
      value={videoData.title || ''}
      generator={handleOptionGeneration}
      onSubmit={handleSubmission}
    />
  )
}