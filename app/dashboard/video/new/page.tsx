import VideoTopicForm from '../_lib/topic-form'
import { Separator } from '@/app/_modules/components/ui/separator'

export default function Page() {
  return (
    <>
      <div className="prose prose-md mb-12">
        <h2>Create new video</h2>
        <p>Start a new video by adding a topic.</p>
      </div>

      <Separator className="mb-6" />

      <VideoTopicForm />
    </>
  )
}
