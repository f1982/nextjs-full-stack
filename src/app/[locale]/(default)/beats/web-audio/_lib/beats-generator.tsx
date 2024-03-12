'use client'

import { Button } from '@/components/ui/button'
import { Slider } from '@/components/ui/slider'
import React, { useEffect, useRef, useState } from 'react'

// import { useAudioContext } from 'standardized-audio-context';
// import { Button, Slider } from 'shadcn/ui';

const BeatsGenerator = () => {
  const audioContext = useRef(new AudioContext())
  const [isPlaying, setIsPlaying] = useState(false)
  
  const [frequencyLeft, setFrequencyLeft] = useState(200)
  const [frequencyRight, setFrequencyRight] = useState(210)
  const [volume, setVolume] = useState(0.5)

  const oscillatorLeft = audioContext.current.createOscillator()
  const oscillatorRight = audioContext.current.createOscillator()
  const gainNodeLeft = audioContext.current.createGain()
  const gainNodeRight = audioContext.current.createGain()

  useEffect(() => {
    if (isPlaying) {
      oscillatorLeft.type = 'sine'
      oscillatorLeft.frequency.setValueAtTime(
        frequencyLeft,
        audioContext.current.currentTime,
      )
      oscillatorLeft.connect(gainNodeLeft)
      gainNodeLeft.gain.setValueAtTime(volume, audioContext.current.currentTime)
      gainNodeLeft.connect(audioContext.current.destination)

      oscillatorRight.type = 'sine'
      oscillatorRight.frequency.setValueAtTime(
        frequencyRight,
        audioContext.current.currentTime,
      )
      oscillatorRight.connect(gainNodeRight)
      gainNodeRight.gain.setValueAtTime(
        volume,
        audioContext.current.currentTime,
      )
      gainNodeRight.connect(audioContext.current.destination)

      oscillatorLeft.start()
      oscillatorRight.start()
    } else {
      // oscillatorLeft.stop();
      // oscillatorRight.stop();
    }

    return () => {
      oscillatorLeft.disconnect()
      oscillatorRight.disconnect()
      gainNodeLeft.disconnect()
      gainNodeRight.disconnect()
    }
  }, [isPlaying, frequencyLeft, frequencyRight, volume])

  const handleTogglePlay = () => {
    setIsPlaying(!isPlaying)
  }

  return (
    <div className="p-4">
      <h1 className="mb-4 text-2xl font-bold">Binaural Beats Generator</h1>
      <div className="mb-4">
        <label className="mb-1 block text-sm font-medium text-gray-700">
          Left Frequency ({frequencyLeft}Hz)
        </label>
        <Slider
          min={1}
          max={2500}
          step={1}
          defaultValue={[frequencyLeft]}
          onValueChange={(value) => setFrequencyLeft(value[0])}
        />
      </div>
      <div className="mb-4">
        <label className="mb-1 block text-sm font-medium text-gray-700">
          Right Frequency ({frequencyRight}Hz)
        </label>
        <Slider
          min={1}
          max={2500}
          step={1}
          defaultValue={[frequencyRight]}
          onValueChange={(value) => setFrequencyRight(value[0])}
        />
      </div>
      <div className="mb-4">
        <label className="mb-1 block text-sm font-medium text-gray-700">
          Volume {volume}
        </label>
        <Slider
          min={0}
          max={1}
          step={0.1}
          defaultValue={[volume]}
          onValueChange={(value) => setVolume(value[0])}
        />
      </div>
      <Button onClick={handleTogglePlay}>{isPlaying ? 'Stop' : 'Start'}</Button>
    </div>
  )
}

export default BeatsGenerator
