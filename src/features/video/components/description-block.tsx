import GenEditForm from '../../../components/form/gen-edit-form'
import { updateVideo } from '@/features/video/api/video-actions'
import { generateVideoDescription } from '@/features/video/api/video-description'
import { APIResponse } from '@/types/types'
import { Video } from '@prisma/client'

//Design
// input video.description, video.id
// <VideoField videoData='' fieldName="" fieldValue="" generator='' generatorOptions='' submit='' />
// <VideoFieldSelect id='' desc='' generator='' submit='' />
//

export default async function DescriptionBlock({
  videoData,
}: {
  videoData: Video
}) {
  const handleSubmission = async (data: any): Promise<APIResponse<any>> => {
    'use server'

    console.log('save desc')
    return await updateVideo({ description: data.value, id: videoData.id })
  }

  const handleOptionGeneration = async (): Promise<
    APIResponse<string | null>
  > => {
    'use server'

    try {
      const desc = await generateVideoDescription(videoData.topic!)
      console.log('desc', desc)
      //auto save
      await handleSubmission({ description: desc, id: videoData.id })
      return { data: desc, status: 'success', message: 'gen and saved' }
    } catch (error) {
      return { data: null, status: 'failure' }
    }
  }

  return (
    <>
      <GenEditForm
        fieldName="description"
        rows={10}
        value={videoData.description || ''}
        generator={handleOptionGeneration}
        submission={handleSubmission}
      />
    </>
  )
}
