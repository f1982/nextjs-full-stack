'use client'

import { BeatsPlayerParams } from './beats-player'
import SliderButtons from './slider-buttons'
import { Button } from '@/components/ui/button'
import { Slider } from '@/components/ui/slider'
import { ChevronDown, ChevronUp, Pause, Play } from 'lucide-react'
import { useEffect, useRef, useState } from 'react'
import { Gain } from 'tone/build/esm/core'
// import { Oscillator } from 'tone'
import { Oscillator } from 'tone/build/esm/source'
import { useDebounceCallback } from 'usehooks-ts'
import { set } from 'zod'

// import { Oscillator } from 'tone/build/esm/source/oscillator/Oscillator'
// import * as Tone from 'tone'

// const Tone = require("tone");
// console.log('Tone', Tone);
// import { Oscillator, Synth} from 'tone';
// console.log('Synth', Synth);

const debounceTime = 500

interface ControlPanelProps {
  fr?: number
  fl?: number
  vl?: number
  vr?: number
  handleChanges: ({
    frequencyRight,
    frequencyLeft,
    volumeLeft,
    volumeRight,
    isPlaying,
  }: BeatsPlayerParams) => void
}

export default function ControlPanel(props: ControlPanelProps) {
  const [frequencyLeft, setFrequencyLeft] = useState(200)
  const debounceFL = useDebounceCallback(setFrequencyLeft, debounceTime)

  const [frequencyRight, setFrequencyRight] = useState(210)
  const debounceFR = useDebounceCallback(setFrequencyRight, debounceTime)

  const [frequency, setFrequency] = useState(210)
  const debounceF = useDebounceCallback((value) => {
    setFrequency(value)
    setFrequencyLeft(value)
    setFrequencyRight(value + frequencyDiff)
  }, debounceTime)

  const [frequencyDiff, setFrequencyDiff] = useState(5)
  const debounceFD = useDebounceCallback((diffValue) => {
    setFrequencyDiff(diffValue)
    setFrequencyLeft(frequency)
    setFrequencyRight(frequency + diffValue)
  }, debounceTime)

  const [volumeLeft, setVolumeLeft] = useState(0.6)
  const debounceVL = useDebounceCallback(setVolumeLeft, debounceTime)

  const [volumeRight, setVolumeRight] = useState(0.6)
  const debounceVR = useDebounceCallback(setVolumeRight, debounceTime)

  const [isPlaying, setIsPlaying] = useState(false)

  const [showFrequencyDetails, setShowFrequencyDetails] = useState(false)
  const debouncedChanges = useDebounceCallback(
    props.handleChanges,
    debounceTime,
  )

  const handleTogglePlay = () => {
    setIsPlaying(!isPlaying)
  }

  useEffect(() => {
    debouncedChanges({
      frequencyRight,
      frequencyLeft,
      volumeLeft,
      volumeRight,
      isPlaying,
    })
  }, [frequencyLeft, frequencyRight, volumeLeft, volumeRight, isPlaying])

  return (
    <>
      <div className="p-4">
        <h1 className="mb-4 text-2xl font-bold">Binaural Beats Generator</h1>

        <div className="flex flex-row items-center justify-center">
          <SliderButtons
            className="flex-1"
            unit="Hz"
            defaultValue={200}
            label="Frequency"
            min={1}
            max={1500}
            step={1}
            handleValueChange={(v) => {
              console.log('v', v)
              setFrequency(v)
              setFrequencyLeft(v)
              setFrequencyRight(v + frequencyDiff)
            }}
          />
          <Button
            variant={'ghost'}
            onClick={() => setShowFrequencyDetails((v) => !v)}>
            {showFrequencyDetails ? <ChevronUp /> : <ChevronDown />}
          </Button>
        </div>

        {showFrequencyDetails && (
          <>
            <div className="flex flex-col gap-3 p-6">
              <div className="mb-4">
                <label className="mb-1 block text-sm font-medium text-gray-700">
                  Left Frequency ({frequencyLeft}Hz)
                </label>
                <Slider
                  min={1}
                  max={1500}
                  step={1}
                  value={[frequencyLeft]}
                  // defaultValue={[frequencyLeft]}
                  onValueChange={(value) => {
                    setFrequencyLeft(value[0])
                  }}
                />
              </div>
              <div className="mb-4">
                <label className="mb-1 block text-sm font-medium text-gray-700">
                  Right Frequency ({frequencyRight}Hz)
                </label>
                <Slider
                  min={1}
                  max={1500}
                  step={1}
                  value={[frequencyRight]}
                  onValueChange={(value) => {
                    setFrequencyRight(value[0])
                  }}
                />
              </div>
            </div>
          </>
        )}

        <SliderButtons
          unit="Hz"
          defaultValue={7}
          label="Frequency Differences"
          min={1}
          max={500}
          step={1}
          handleValueChange={(diffValue) => {
            console.log('diffValue', diffValue)
            setFrequencyDiff(diffValue)
            setFrequencyLeft(frequency)
            setFrequencyRight(frequency + diffValue)
          }}
        />

        <div className="mb-4">
          <SliderButtons
            unit="dB"
            defaultValue={7}
            label="Volume"
            min={-100}
            max={100}
            step={1}
            handleValueChange={(v) => {
              setVolumeLeft(v)
              setVolumeRight(v)
            }}
          />
        </div>

        <div className="mb-4">
          <label className="mb-1 block text-sm font-medium text-gray-700">
            Volume ({volumeLeft} L)
          </label>
          <Slider
            min={-50}
            max={50}
            step={1}
            defaultValue={[volumeLeft]}
            onValueChange={(value) => setVolumeLeft(value[0])}
          />
        </div>
        <div className="mb-4">
          <label className="mb-1 block text-sm font-medium text-gray-700">
            Volume ({volumeRight} R)
          </label>
          <Slider
            min={-50}
            max={50}
            step={1}
            defaultValue={[volumeRight]}
            onValueChange={(value) => setVolumeRight(value[0])}
          />
        </div>

        <Button variant={'outline'} size={'lg'} onClick={handleTogglePlay}>
          {isPlaying ? <Pause /> : <Play />}
        </Button>
      </div>
    </>
  )
}
