import GenEditForm from './gen-edit-form'
import { cache } from '@/app/_lib/file-cache'
import { generateScriptHook } from '@/app/_lib/model/script-hook'
import { Video } from '@prisma/client'

export default async function ScriptHookBlock({
  videoData
}: {
  videoData: Video
}) {
  const cacheKey = 'script-hook-' + videoData.id
  let hook = await cache.get(cacheKey)

  const handleSubmission = async (data: any) => {
    'use server'

    await cache.set(cacheKey, data.value)
    return { status: 'success', message: '', data: data.value }
  }

  const handleOptionGeneration = async () => {
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
      optionsLoader={handleOptionGeneration}
      onSubmit={handleSubmission}
    />
  )
}
