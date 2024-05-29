import { notFound } from 'next/navigation'

import { retrieveVideo } from '@/features/video-meta/actions/video-actions'

import ContentGenAll from './_component/content-gen-all'

export default async function Page({ params }: { params: { id: string } }) {
  const { status, data: videoData } = await retrieveVideo(params.id)

  if (!videoData) {
    return notFound()
  }

  return <ContentGenAll videoData={videoData} />
}
