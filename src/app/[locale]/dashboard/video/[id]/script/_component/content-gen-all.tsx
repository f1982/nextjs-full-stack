'use client'

import { useRef } from 'react'

import { Play } from 'lucide-react'

import { Button } from '@/components/ui/button'

import ScriptEndingBlock from '@/features/video-script/components/script-ending-block'
import ScriptHookBlock from '@/features/video-script/components/script-hook-block'

export default function ContentGenAll({ videoData }: { videoData: any }) {
  const hookRef = useRef<any>()
  const endingRef = useRef<any>()

  async function genAll() {
    await hookRef.current?.refresh()
    await endingRef.current?.refresh()
  }

  // const saveAllScriptToDB = async () => {
  //   'use server'

  //   // Create new video
  //   let script = ''
  //   script += (await cache.get('script-hook-' + videoData.id)) || ''
  //   script += '\n\n'
  //   script += (await cache.get('script-quote-' + videoData.id)) || ''
  //   script += '\n\n'
  //   script += (await cache.get('script-main-' + videoData.id)) || ''
  //   script += '\n\n'
  //   script += (await cache.get('script-ending-' + videoData.id)) || ''
  //   script += '\n\n'

  //   const updatedData = { script, id: videoData.id }
  //   return await updateVideo(updatedData)
  // }

  return (
    <div className="flex flex-col gap-6">
      <div>
        <Button onClick={async () => await genAll()}>
          <Play />
          <span>Generate all metadata</span>
        </Button>
      </div>
      {/* <SaveButton callback={saveAllScriptToDB} /> */}
      {/* <TimelineScriptForm videoId={videoData.id}></TimelineScriptForm> */}
      <ScriptHookBlock ref={hookRef} videoData={videoData} />
      <ScriptEndingBlock ref={endingRef} videoData={videoData} />
      {/* <ScriptQuotesBlock videoData={videoData} />
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
       */}
    </div>
  )
}
