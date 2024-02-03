'use client'

import VideoTopicForm from './topic-form'
import ListSelector from '@/app/_modules/components/molecule/list-selector'
import Spinner from '@/app/_modules/components/molecule/spinner'
import { Button } from '@/app/_modules/components/ui/button'
import { Video } from '@prisma/client'
import React, { useState } from 'react'

export default function TopicSelect({
  topicOptions: options,
  value,
  onSubmit,
  requestToGenerate
}: {
  topicOptions: string[]
  value?: Video
  onSubmit: any
  requestToGenerate?: any
}) {
  const [topicOpts, setTopicOpts] = useState(options)

  const [selectedTopic, setSelectedTopic] = useState<any>({
    topic: value?.topic
  })
  const [isLoading, setIsLoading] = useState(false)

  async function loadTopicOpts() {
    const response = await fetch(`/api/gen/video-topic`, {
      method: 'GET'
    })
    console.log('response', response.json())
  }

  return (
    <div>
      {isLoading ? (
        <Spinner />
      ) : (
        <ListSelector
          options={topicOpts}
          callback={(opt: any) => {
            console.log('opt', opt)
            setSelectedTopic({ topic: opt.type })
          }}
        />
      )}

      <Button
        className=""
        variant={'secondary'}
        onClick={async () => {
          setIsLoading(true)
          const response = await fetch(`/api/gen/video-topic`, {
            method: 'GET'
          })

          const result = await response.json()
          console.log('result', result)

          setTopicOpts(result.data)
          setIsLoading(false)
        }}>
        Generate new
      </Button>
      <p>{JSON.stringify(topicOpts)}</p>
      <VideoTopicForm formData={selectedTopic} handleSubmit={onSubmit} />
    </div>
  )
}
