'use client'

import React, { useEffect, useRef } from 'react'
import { context } from 'tone'
import { PanVol } from 'tone/build/esm/component'
import { Context, Gain } from 'tone/build/esm/core'
import { Tone } from 'tone/build/esm/core/Tone'
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

  const gainLeft = useRef<Gain>(new Gain(volumeLeft).toDestination())
  const panLeft = useRef<PanVol>(new PanVol(-1, 0).toDestination())

  const oscRight = useRef<Oscillator>(
    new Oscillator(frequencyRight, 'sine').toDestination(),
  )
  const gainRight = useRef<Gain>(new Gain(volumeLeft).toDestination())
  const panRight = useRef<PanVol>(new PanVol(1, 0).toDestination())

  const contextRef = useRef<Context>(new Context())

  const oscConnect = () => {
    oscLeft.current.connect(panLeft.current).connect(gainLeft.current)
    oscRight.current.connect(panRight.current).connect(gainRight.current)
  }

  const oscDisconnect = () => {
    oscLeft.current.disconnect(panLeft.current).disconnect(gainLeft.current)
    oscRight.current.disconnect(panRight.current).disconnect(gainRight.current)
  }

  useEffect(() => {
    oscConnect()

    // contextRef.current.resume()
    console.log('contextRef.current', contextRef.current)
    // Check the state of the AudioContext and resume if necessary
    const handleStateCheck = () => {
      // const context = contextRef.current
      const context = oscLeft.current.context
      console.log('context.state', context.state);
      if (context.state === 'suspended' || context.state === 'closed') {
        context
          .resume()
          .then(() => {
            console.log('AudioContext resumed')
          })
          .catch((error) => {
            console.error('Failed to resume AudioContext:', error)
          })
      }
    }

    // Check the AudioContext state periodically
    const intervalId = setInterval(handleStateCheck, 1000)

    return () => {
      clearInterval(intervalId)
      // const context = oscLeft.current.context.
      // context.close()
      //   .then(() => {
      //     console.log('AudioContext closed')
      //   })
      //   .catch((error) => {
      //     console.error('Failed to close AudioContext:', error)
      //   })
      oscDisconnect()
    }
  }, [])

  useEffect(() => {
    oscDisconnect()

    oscLeft.current.frequency.value = frequencyLeft
    oscRight.current.frequency.value = frequencyRight

    // panLeft.current.volume.value = volumeLeft
    // panRight.current.volume.value = volumeRight
    // gainLeft.current.gain.value = volumeLeft
    // gainRight.current.gain.value = volumeRight

    oscLeft.current.volume.value = volumeLeft
    oscRight.current.volume.value = volumeRight

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

  return <div></div>
}
