'use client'

import { useState } from 'react'

import ListSelector from '@/components/molecule/list-select'

import VideoTopicForm from './topic-form'
import TopicGenButton from './topic/topic-gen-button'

export default function TopicSelect({ videoId }: { videoId: string }) {
  const [topicList, setTopicList] = useState<string[] | null>(null)
  const [selectedTopic, setSelectedTopic] = useState<string>('')

  return (
    <div className="flex flex-col gap-6">
      <TopicGenButton
        callback={async (l: string[]) => {
          setTopicList(l)
        }}
      />

      {topicList && (
        <ListSelector
          label="Topic"
          options={topicList}
          onSelect={(topic: string) => {
            setSelectedTopic(topic)
          }}
        />
      )}

      <VideoTopicForm topic={selectedTopic} videoId={videoId} />
    </div>
  )
}
