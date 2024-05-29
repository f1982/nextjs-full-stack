'use client'

import { useRef } from 'react'

import { Play } from 'lucide-react'

import { Button } from '@/components/ui/button'

import SaveScriptsButton from '@/features/video-script/components/save-scripts-button'
import ScriptEndingBlock from '@/features/video-script/components/script-ending-block'
import ScriptHookBlock from '@/features/video-script/components/script-hook-block'

export default function ContentGenAll({ videoData }: { videoData: any }) {
  const hookRef = useRef<any>()
  const endingRef = useRef<any>()

  async function generateAllScripts() {
    await hookRef.current?.refresh()
    await endingRef.current?.refresh()
  }

  return (
    <div className="flex flex-col gap-6">
      <div>
        <Button onClick={generateAllScripts}>
          <Play />
          <span>Generate all scripts</span>
        </Button>
      </div>
      <div>
        <SaveScriptsButton videoId={videoData.id} />
      </div>
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
