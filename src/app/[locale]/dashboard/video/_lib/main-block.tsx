import GenEditForm from './gen-edit-form'
import { cache } from '@/lib/file-cache'
import { generateExtend } from '@/lib/model/script-extend'
import { Video } from '@prisma/client'

export default async function ScriptMainBlock({
  videoData,
}: {
  videoData: Video
}) {
  const getOutlines = async () => {
    const name = 'outline'
    const cacheKey = 'script-' + name + '-' + videoData.id
    const result = await cache.get(cacheKey)
    return result.split('---').map((outline: string) => outline.trim())
  }

  const name = 'main'
  const cacheKey = 'script-' + name + '-' + videoData.id

  const outlines = await getOutlines()

  const handleSubmission = async (data: any) => {
    'use server'

    // return await updateVideo({ title: data.value, id: videoData.id })
    await cache.set(cacheKey, data.value)
    return { status: 'success', message: '', data: data.value }
  }

  const handleOptionGeneration = async () => {
    'use server'

    let main: string = ''
    for (const outline of outlines) {
      main += await generateExtend(outline, videoData.topic!)
    }

    return { data: main, status: 'success' }
  }

  return (
    <GenEditForm
      rows={20}
      fieldName={name}
      value={''}
      optionsLoader={handleOptionGeneration}
      onSubmit={handleSubmission}
    />
  )
}
