'use client'

import { useRef } from 'react'

import { Play } from 'lucide-react'

import { Button } from '@/components/ui/button'

import DescriptionBlock from '@/features/video-meta/components/description-block'
import TagsBlock from '@/features/video-meta/components/tags-block'
import TitleBlock from '@/features/video-meta/components/titles-block'

export default function ContentGenAll({ videoData }: { videoData: any }) {
  const titleRef = useRef<any>()
  const descRef = useRef<any>()
  const tagsRef = useRef<any>()

  async function genAll() {
    await titleRef.current?.refresh()
    await descRef.current?.refresh()
    await tagsRef.current?.refresh()
  }

  return (
    <div className="flex flex-col gap-6">
      <div>
        <Button onClick={async () => await genAll()}>
          <Play />
          <span>Gen all</span>
        </Button>
      </div>
      <TitleBlock ref={titleRef} videoData={videoData} />
      <DescriptionBlock ref={descRef} videoData={videoData} />
      <TagsBlock ref={tagsRef} videoData={videoData} />
      {/* <VideoMetadataForm videoId={videoData.id} /> */}
    </div>
  )
}
