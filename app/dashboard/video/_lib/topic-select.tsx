'use client'

import VideoTopicForm from './topic-form'
import ListSelector from '@/app/_modules/components/molecule/list-selector'
import { Video } from '@prisma/client'
import React, { useState } from 'react'

export default function TopicSelect({
  options,
  value,
  onSubmit
}: {
  options: string[]
  value?: Video
  onSubmit: any
}) {
  const [selectedTopic, setSelectedTopic] = useState<any>({
    topic: value?.topic
  })
  return (
    <div>
      <ListSelector
        options={options}
        callback={(opt: any) => {
          console.log('opt', opt)
          setSelectedTopic({ topic: opt.type })
        }}
      />

      <VideoTopicForm formData={selectedTopic} handleSubmit={onSubmit} />
    </div>
  )
}
