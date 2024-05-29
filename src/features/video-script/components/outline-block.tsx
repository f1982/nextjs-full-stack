import { APIResponse } from '@/types/types'
import { Video } from '@prisma/client'

import { cache } from '@/lib/file-cache'

import { generateScriptOutline } from '@/features/video-script/actions/script-outline'

import GenEditForm from '../../../components/form/gen-edit-form'

export default async function ScriptOutlineBlock({
  videoData,
}: {
  videoData: Video
}) {
  const name = 'outline'
  const cacheKey = 'script-' + name + '-' + videoData.id
  let value = await cache.get(cacheKey)

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

    const content = await generateScriptOutline(videoData.topic!)
    // { "author": "", "quote": "", reference: ""}
    // const sentences = quotes.map((quote) => {
    //   return quote.author + ' ' + quote.quote
    // })
    return { data: content, status: 'success' }
  }

  return (
    <GenEditForm
      rows={20}
      fieldName={name}
      value={value || ''}
      optionsFactory={handleOptionGeneration}
      onSubmit={handleSubmission}
    />
  )
}
