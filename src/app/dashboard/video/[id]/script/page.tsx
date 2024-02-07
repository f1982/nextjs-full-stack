import ScriptMainBlock from '../../_lib/main-block'
import ScriptOutlineBlock from '../../_lib/outline-block'
import ScriptQuotesBlock from '../../_lib/quotes-block'
import ScriptEndingBlock from '../../_lib/script-ending-block'
import ScriptHookBlock from '../../_lib/script-hook-block'
import { retrieveVideo, updateVideo } from '../../_lib/video-actions'
import SaveButton from '@/app/_modules/components/molecule/save-button'
import { ServerError } from '@/app/_modules/components/molecule/server-error'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue
} from '@/app/_modules/components/ui/select'
import { mockServerResponse } from '@/lib/debug-only'
import { cache } from '@/lib/file-cache'
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
