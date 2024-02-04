import SelectEditForm from './select-edit-form'
import { generateVideoTitles } from '@/app/_lib/model/video-titles'
import { getSiteUrl } from '@/app/_lib/settings'
import { Separator } from '@/app/_modules/components/ui/separator'
import { updateVideo } from '@/app/dashboard/video/_lib/video-actions'
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
      optionsLoader={handleOptionGeneration}
      onSubmit={handleSubmission}
    />
  )
}
