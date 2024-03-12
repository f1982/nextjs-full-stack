'use client'

import BeatsGenerator from './beats-generator'
import ControlPanel from './control-panel'
import React, { useState } from 'react'

export interface BeatsPlayerParams {
  frequencyLeft: number

  frequencyRight: number

  volumeLeft: number

  volumeRight: number
  isPlaying: boolean
}

export default function BeatsPlayer() {
  const [params, setParams] = useState<BeatsPlayerParams>({
    frequencyLeft: 200,
    frequencyRight: 210,
    volumeLeft: 0.6,
    volumeRight: 0.6,
    isPlaying: false,
  })
  return (
    <div>
      <ControlPanel
        vl={1}
        handleChanges={(props) => {
          console.log('handleChanges: ', props)

          setParams(props)
        }}
      />
      <BeatsGenerator
        frequencyLeft={params?.frequencyLeft}
        frequencyRight={params?.frequencyRight}
        volumeLeft={params?.volumeLeft}
        volumeRight={params?.volumeRight}
        isPlaying={params?.isPlaying}
      />
    </div>
  )
}
