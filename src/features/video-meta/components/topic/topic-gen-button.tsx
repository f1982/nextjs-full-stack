'use client'

import { useState } from 'react'

import { Wand2 } from 'lucide-react'

import { sleep } from '@/utils/utils'

import { toastServerError } from '@/components/molecule/server-error'
import Spinner from '@/components/molecule/spinner'
import { Button } from '@/components/ui/button'

import { genTitles } from '../../actions/video-titles'

export default function TopicGenButton({
  callback,
}: {
  callback: (list: string[]) => {}
}) {
  const [isLoading, setIsLoading] = useState(false)
  const [titles, setTitles] = useState([])

  async function loadTopicOpts() {
    setIsLoading(true)

    const titleList = await genTitles('黑洞内部', 5)
    await sleep(2000)

    setIsLoading(false)
    if (!titleList) {
      return toastServerError()
    } else {
      setTitles(titleList)
      callback?.(titleList)
    }
  }

  return (
    <div>
      <Button
        disabled={isLoading}
        className="flex flex-row gap-3"
        onClick={loadTopicOpts}>
        {isLoading ? <Spinner /> : <Wand2 />}
        <span>Generate Topic</span>
      </Button>
    </div>
  )
}
