// components/BinauralBeatsGenerator.tsx
import { Button } from '@/components/ui/button'
import { Slider } from '@/components/ui/slider'
import Pizzicato from 'pizzicato'
import React, { useEffect, useState } from 'react'

interface BinauralBeatsGeneratorProps {
  frequencyLeft: number
  frequencyRight: number
  setFrequencyLeft: React.Dispatch<React.SetStateAction<number>>
  setFrequencyRight: React.Dispatch<React.SetStateAction<number>>
}

const BinauralBeatsGenerator: React.FC<BinauralBeatsGeneratorProps> = ({
  frequencyLeft,
  frequencyRight,
  setFrequencyLeft,
  setFrequencyRight,
}) => {
  const [isPlaying, setIsPlaying] = useState(false)

  useEffect(() => {
    const sound = new Pizzicato.Sound({
      source: 'wave',
      options: {
        frequency: frequencyLeft,
        type: 'sine',
      },
    })

    const soundRight = new Pizzicato.Sound({
      source: 'wave',
      options: {
        frequency: frequencyRight,
        type: 'sine',
      },
    })

    if (isPlaying) {
      sound.play()
      soundRight.play()
    } else {
      sound.stop()
      soundRight.stop()
    }

    return () => {
      sound.stop()
      soundRight.stop()
    }
  }, [isPlaying, frequencyLeft, frequencyRight])

  const handleTogglePlay = () => {
    setIsPlaying(!isPlaying)
  }

  return (
    <div className="p-4">
      <h1 className="mb-4 text-2xl font-bold">Binaural Beats Generator</h1>
      <div className="mb-4">
        <label className="mb-1 block text-sm font-medium">
          Left Frequency (Hz)
        </label>

        <Slider
          min={1}
          max={500}
          step={1}
          defaultValue={[frequencyLeft]}
          onValueChange={(value) => setFrequencyLeft(value[0])}
        />
      </div>
      <div className="mb-4">
        <label className="mb-1 block text-sm font-medium">
          Right Frequency (Hz)
        </label>
        <Slider
          min={1}
          max={500}
          step={1}
          defaultValue={[frequencyRight]}
          onValueChange={(value) => setFrequencyRight(value[0])}
        />
      </div>
      <Button onClick={handleTogglePlay}>{isPlaying ? 'Stop' : 'Start'}</Button>
    </div>
  )
}

export default BinauralBeatsGenerator
