'use client'

import VideoTopicForm from './topic-form'
import ListSelector from '@/components/molecule/list-select'
import Spinner from '@/components/molecule/spinner'
import { Button } from '@/components/ui/button'
import { Video } from '@prisma/client'
import { Wand2 } from 'lucide-react'
import React, { useState } from 'react'

export default function TopicSelect({
  value,
  onSubmit,
}: {
  value?: Video
  onSubmit: any
}) {
  const [topicOpts, setTopicOpts] = useState([])

  const [selectedTopic, setSelectedTopic] = useState<any>({
    topic: value?.topic,
  })
  const [isLoading, setIsLoading] = useState(false)

  async function loadTopicOpts() {
    setIsLoading(true)
    const response = await fetch(`/api/gen/video-topic`, {
      method: 'GET',
    })

    const result = await response.json()

    setTopicOpts(result.data)
    setIsLoading(false)
  }

  return (
    <div className="flex flex-col gap-6">
      <div>
        <Button
          disabled={isLoading}
          className="flex flex-row gap-3"
          onClick={loadTopicOpts}>
          {isLoading ? <Spinner /> : <Wand2 />}
          <span>Generate Topic By AI</span>
        </Button>
      </div>

      <ListSelector
        label="Topic"
        options={topicOpts}
        callback={(opt: any) => {
          console.log('opt', opt)
          setSelectedTopic({ topic: opt })
        }}
      />

      <VideoTopicForm formData={selectedTopic} handleSubmit={onSubmit} />
    </div>
  )
}
