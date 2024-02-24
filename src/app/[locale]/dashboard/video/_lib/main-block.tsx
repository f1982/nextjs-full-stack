import GenEditForm from './gen-edit-form'
import { cache } from '@/lib/file-cache'
import { generateExtend } from '@/lib/model/script-extend'
import { APIResponse } from '@/lib/types/types'
import { Video } from '@prisma/client'

export default async function ScriptMainBlock({
  videoData,
}: {
  videoData: Video
}) {
  const getOutlines = async () => {
    const name = 'outline'
    const cacheKey = 'script-' + name + '-' + videoData.id
    const result = (await cache.get(cacheKey)) as string
    if (!result || !result.includes('---')) {
      return ''
    }
    return result
      .split('---')
      .map((outline: string) => outline && outline.trim())
  }

  const name = 'main'
  const cacheKey = 'script-' + name + '-' + videoData.id

  let value = await cache.get(cacheKey)

  const outlines = await getOutlines()
  console.log('outlines', outlines)

  const handleSubmission = async (
    data: any,
  ): Promise<APIResponse<string | null>> => {
    'use server'

    // return await updateVideo({ title: data.value, id: videoData.id })
    await cache.set(cacheKey, data.value)
    return { status: 'success', message: '', data: data.value }
  }

  const handleOptionGeneration = async (): Promise<
    APIResponse<string | null>
  > => {
    'use server'

    let main: string = ''
    for (const outline of outlines) {
      if (outline.length > 10) {
        main += await generateExtend(outline, videoData.topic!)
      }
    }

    return { data: main, status: 'success', message: '' }
  }

  return (
    <GenEditForm
      rows={20}
      fieldName={name}
      value={value || ''}
      generator={handleOptionGeneration}
      submission={handleSubmission}
    />
  )
}
