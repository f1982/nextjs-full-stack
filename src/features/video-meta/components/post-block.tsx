import { Video } from '@prisma/client'

import { cache } from '@/lib/file-cache'

import { generatePostUpdate } from '@/features/video-meta/actions/post-updates'

import SelectEditForm from '../../../components/form/select-edit-form'

export default async function PostUpdatesBlock({
  videoData,
}: {
  videoData: Video
}) {
  const name = 'post-updates'
  const cacheKey = 'script-' + name + '-' + videoData.id
  let value = await cache.get(cacheKey)

  const handleSubmission = async (data: any) => {
    'use server'

    // return await updateVideo({ title: data.value, id: videoData.id })
    await cache.set(cacheKey, data.value)
    return { status: 'success', message: '', data: data.value }
  }

  const handleOptionGeneration = async () => {
    'use server'

    const posts = await generatePostUpdate(videoData.topic!, 6)
    const sentences = posts.map((quote) => {
      return quote.content
    })
    return { data: sentences, status: 'success' }
  }

  return (
    <SelectEditForm
      fieldName={name}
      defaultValue={value || ''}
      optionsFactory={handleOptionGeneration}
      onSubmit={handleSubmission}
    />
  )
}
