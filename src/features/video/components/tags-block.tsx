import GenEditForm from '../../../components/form/gen-edit-form'
import { updateVideo } from '@/features/video/api/video-actions'
import { generateVideoTags } from '@/features/video/api/video-tags'
import { APIResponse } from '@/types/types'
import { Video } from '@prisma/client'

export default async function TagsBlock({
  videoData: { id, tags, topic },
}: {
  videoData: Video
}) {
  const handleSubmission = async (data: any): Promise<APIResponse<any>> => {
    'use server'

    return await updateVideo({ tags: data.value, id })
  }

  const handleGen = async (): Promise<APIResponse<any>> => {
    'use server'

    const desc = await generateVideoTags(topic!)
    return { data: desc, status: 'success' }
  }

  return (
    <>
      <GenEditForm
        fieldName="tags"
        value={tags || ''}
        generator={handleGen}
        submission={handleSubmission}
      />
    </>
  )
}
