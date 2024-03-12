'use client'

import React, { useEffect, useRef } from 'react'
import { PanVol } from 'tone/build/esm/component'
import { Gain } from 'tone/build/esm/core'
import { Oscillator } from 'tone/build/esm/source'

interface BeatsPlayerProps {
  frequencyLeft: number

  frequencyRight: number

  volumeLeft: number

  volumeRight: number
  isPlaying: boolean
}

export default function BeatsGenerator({
  frequencyLeft,
  frequencyRight,
  volumeLeft,
  volumeRight,
  isPlaying = false,
}: BeatsPlayerProps) {
  const oscLeft = useRef<Oscillator>(
    new Oscillator(frequencyLeft, 'sine').toDestination(),
  )
  // const gainLeft = useRef<Gain>(new Gain(volumeLeft).toDestination())
  const panLeft = useRef<PanVol>(new PanVol(-1, 100).toDestination())

  const oscRight = useRef<Oscillator>(
    new Oscillator(frequencyRight, 'sine').toDestination(),
  )
  // const gainRight = useRef<Gain>(new Gain(volumeLeft).toDestination())
  const panRight = useRef<PanVol>(new PanVol(1, 100).toDestination())

  const oscConnect = () => {
    oscLeft.current.connect(panLeft.current)
    // oscLeft.current.connect(gainLeft.current).connect(panLeft.current)
    // oscLeft.current.connect(panLeft.current)

    oscRight.current.connect(panRight.current)
    // oscRight.current.connect(gainRight.current).connect(panRight.current)
    // oscRight.current.connect(panRight.current)
  }

  const oscDisconnect = () => {
    oscLeft.current.disconnect(panLeft.current)
    // oscLeft.current.disconnect(gainLeft.current)
    // oscLeft.current.disconnect(panLeft.current)

    // oscRight.current.disconnect(gainRight.current)
    oscRight.current.disconnect(panRight.current)
  }

  useEffect(() => {
    oscConnect()
    return () => oscDisconnect()
  }, [])

  useEffect(() => {
    oscDisconnect()

    oscLeft.current.frequency.value = frequencyLeft
    oscRight.current.frequency.value = frequencyRight

    panLeft.current.volume.value = volumeLeft
    panRight.current.volume.value = volumeRight
    // gainLeft.current.gain.value = volumeLeft
    // gainRight.current.gain.value = volumeRight
    // oscLeft.current.connect(gainLeft.current)
    oscConnect()
  }, [frequencyLeft, frequencyRight, volumeLeft, volumeRight])

  useEffect(() => {
    if (isPlaying) {
      oscLeft.current.start()
      oscRight.current.start()
    } else {
      oscLeft.current.stop()
      oscRight.current.stop()
    }
  }, [isPlaying])

  return <div>BeatsPlayer</div>
}
