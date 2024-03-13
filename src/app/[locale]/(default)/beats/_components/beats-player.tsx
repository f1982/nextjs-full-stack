'use client'

import BeatsGenerator from './beats-generator'
import ControlPanel from './control-panel'
import React, { useEffect, useState } from 'react'

export interface BeatsPlayerParams {
  frequencyLeft: number

  frequencyRight: number

  volumeLeft: number

  volumeRight: number
  isPlaying: boolean
}

export default function BeatsPlayer() {
  const [params, setParams] = useState<BeatsPlayerParams>()

  useEffect(() => {
    setParams({
      frequencyLeft: 200,
      frequencyRight: 210,
      volumeLeft: 0.6,
      volumeRight: 0.6,
      isPlaying: false,
    })
  }, [])

  return (
    <div className="mx-auto w-full max-w-3xl px-3">
      <div className="prose-md prose mb-6 dark:prose-invert ">
        <h1 className='text-center'>Binaural Beats Generator</h1>
        <p>
          A Binaural Beats Generator is a tool or device that creates binaural
          beats, which are auditory illusions perceived when two slightly
          different frequencies are presented separately to each ear. The brain
          perceives a third frequency, known as the binaural beat, which is the
          difference between the two frequencies.
        </p>
      </div>

      <ControlPanel
        vl={1}
        handleChanges={(props) => {
          setParams(props)
        }}
      />

      {params && (
        <BeatsGenerator
          frequencyLeft={params?.frequencyLeft}
          frequencyRight={params?.frequencyRight}
          volumeLeft={params?.volumeLeft}
          volumeRight={params?.volumeRight}
          isPlaying={params?.isPlaying}
        />
      )}

      <div className='mb-12'></div>
    </div>
  )
}
