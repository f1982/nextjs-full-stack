import GenEditForm from '../../../components/form/gen-edit-form'
import { cache } from '@/lib/file-cache'
import { generateScriptEnding } from '@/features/video-script/api/script-ending'
import { APIResponse } from '@/types/types'
import { Video } from '@prisma/client'

export default async function ScriptHookBlock({
  videoData,
}: {
  videoData: Video
}) {
  const prefix = 'script-ending-'
  const cacheKey = prefix + videoData.id

  let content = await cache.get(cacheKey)

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

    const content = await generateScriptEnding(videoData.topic!, '无责任猜想')
    //auto save
    await cache.set(cacheKey, content)

    return { data: content, status: 'success' }
  }

  return (
    <GenEditForm
      fieldName="scriptEnding"
      value={content || ''}
      generator={handleOptionGeneration}
      submission={handleSubmission}
    />
  )
}
