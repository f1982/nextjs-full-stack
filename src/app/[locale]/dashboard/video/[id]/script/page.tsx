import { notFound } from 'next/navigation'

import { retrieveVideo } from '@/features/video-meta/actions/video-actions'

import ScriptGeneration from './_component/script-generation'

export default async function Page({ params }: { params: { id: string } }) {
  const { status, data: videoData } = await retrieveVideo(params.id)

  if (!videoData) {
    return notFound()
  }

  return <ScriptGeneration videoData={videoData} />
}
