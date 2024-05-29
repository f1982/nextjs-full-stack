'use client'

import { useRef } from 'react'

import { Button } from '@/components/ui/button'

import DescriptionBlock from '@/features/video-meta/components/description-block'

export default function ContentGenAll({ videoData }: { videoData: any }) {
  const descRef = useRef<any>()

  async function genAll() {
    console.log('genAll')
    await descRef.current?.refresh()
    console.log('refresh finished')
  }

  return (
    <div>
      <Button onClick={async () => await genAll()}>Gen all</Button>
      {/* <TitleBlock videoData={videoData} /> */}
      <DescriptionBlock ref={descRef} videoData={videoData} />
      {/* <TagsBlock videoData={videoData} /> */}
      {/* <VideoMetadataForm videoId={videoData.id} /> */}
    </div>
  )
}
