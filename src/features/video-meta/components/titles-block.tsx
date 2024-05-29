'use client'

import { Video } from '@prisma/client'

import SelectEditForm from '@/components/form/select-edit-form'

import { updateVideo } from '@/features/video-meta/actions/video-actions'
import { generateVideoTitles } from '@/features/video-meta/actions/video-titles'

export default async function TitleBlock({ videoData }: { videoData: Video }) {
  const handleSubmission = async (data: any) => {
    return await updateVideo({ title: data.value, id: videoData.id })
  }

  const getOptions = async () => {
    const titleList = await generateVideoTitles(videoData.topic!, 5)
    return { data: titleList, status: 'success' }
  }

  return (
    <SelectEditForm
      fieldName="title"
      defaultValue={videoData.title || ''}
      optionsFactory={getOptions}
      onSubmit={handleSubmission}
    />
  )
}
