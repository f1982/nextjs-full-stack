import SaveButton from '@/components/molecule/save-button'
import { ServerError } from '@/components/molecule/server-error'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'
import {
  retrieveVideo,
  updateVideo,
} from '@/features/video-meta/actions/video-actions'
import ScriptMainBlock from '@/features/video-script/components/main-block'
import ScriptOutlineBlock from '@/features/video-script/components/outline-block'
import ScriptQuotesBlock from '@/features/video-script/components/quotes-block'
import ScriptEndingBlock from '@/features/video-script/components/script-ending-block'
import ScriptHookBlock from '@/features/video-script/components/script-hook-block'
import TimelineScriptForm from '@/features/video-script/components/timeline-script-form'
import { cache } from '@/lib/file-cache'
import { mockServerResponse } from '@/utils/debug-only'
import React from 'react'

export default async function Page({ params }: { params: { id: string } }) {
  const { status, data: videoData } = await retrieveVideo(params.id)

  if (status === 'failure' || !videoData) {
    return <ServerError message=""></ServerError>
  }

  const handleSubmit = async () => {
    'use server'

    // Update existing video
    if (!params.id) {
      return mockServerResponse('failure')
    }

    // Create new video
    let script = ''
    script += (await cache.get('script-hook-' + videoData.id)) || ''
    script += '\n\n'
    script += (await cache.get('script-quote-' + videoData.id)) || ''
    script += '\n\n'
    script += (await cache.get('script-main-' + videoData.id)) || ''
    script += '\n\n'
    script += (await cache.get('script-ending-' + videoData.id)) || ''
    script += '\n\n'

    const updatedData = { script, id: params.id }
    console.log('updatedData', updatedData)
    return await updateVideo(updatedData)
  }

  return (
    <div>
      <SaveButton callback={handleSubmit} />
      <TimelineScriptForm videoId={videoData.id}></TimelineScriptForm>
      <ScriptHookBlock videoData={videoData} />
      <ScriptQuotesBlock videoData={videoData} />
      <div className="prose prose-xl">
        <h3>Select style</h3>
      </div>
      <Select>
        <SelectTrigger className="w-[180px]">
          <SelectValue placeholder="Theme" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="light">Light</SelectItem>
          <SelectItem value="dark">Dark</SelectItem>
          <SelectItem value="system">System</SelectItem>
        </SelectContent>
      </Select>

      <ScriptOutlineBlock videoData={videoData} />
      <ScriptMainBlock videoData={videoData} />
      <ScriptEndingBlock videoData={videoData} />
    </div>
  )
}
