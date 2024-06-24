'use client'

import { useState } from 'react'

import { sleep } from '@/utils/utils'

import Spinner from '@/components/molecule/spinner'
import { Button } from '@/components/ui/button'

import { updateVideo } from '@/features/video-meta/actions/video-actions'
import { getVideoScript } from '@/features/video-script/actions/temp-storage'

export default function SaveScriptsButton({ videoId }: { videoId: string }) {
  const [isLoading, setIsLoading] = useState(false)

  const saveScript = async () => {
    setIsLoading(true)
    let script = await getVideoScript(videoId)
    await sleep(2000)
    await updateVideo({ id: videoId, script })
    setIsLoading(false)
  }
  return (
    <Button onClick={saveScript}>{isLoading && <Spinner />}Save scripts</Button>
  )
}
