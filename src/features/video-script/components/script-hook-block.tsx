import { APIResponse } from '@/types/types'
import { Video } from '@prisma/client'

import { cache } from '@/lib/file-cache'

import { generateScriptHook } from '@/features/video-script/actions/script-hook'

import GenEditForm from '../../../components/form/gen-edit-form'

export default async function ScriptHookBlock({
  videoData,
}: {
  videoData: Video
}) {
  const cacheKey = 'script-hook-' + videoData.id
  let hook = await cache.get(cacheKey)

  const handleSubmission = async (
    data: any,
  ): Promise<APIResponse<string | null>> => {
    'use server'

    await cache.set(cacheKey, data.value)
    return { status: 'success', message: '', data: data.value }
  }

  const handleOptionGeneration = async (): Promise<
    APIResponse<string | null>
  > => {
    'use server'

    const content = await generateScriptHook(videoData.topic!)
    //auto save
    await cache.set(cacheKey, content)

    return { data: content, status: 'success' }
  }

  return (
    <GenEditForm
      fieldName="scriptHook"
      value={hook || ''}
      optionsFactory={handleOptionGeneration}
      onSubmit={handleSubmission}
    />
  )
}
