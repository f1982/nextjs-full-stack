import { Button } from '@/components/ui/button'
import { Slider } from '@/components/ui/slider'
import { useEffect, useState } from 'react'
import { useDebounceCallback } from 'usehooks-ts'

const debounceTime = 500

interface SliderButtonsProps {
  label: string
  defaultValue: number
  min: number
  max: number
  step: number
  handleValueChange: (value: number) => void
}

export default function SliderButtons({
  label,
  defaultValue,
  min,
  max,
  step,
  handleValueChange,
}: SliderButtonsProps) {
  const [value, setValue] = useState(defaultValue)

  const debounceValue = useDebounceCallback(handleValueChange, debounceTime)

  useEffect(() => {
    debounceValue(value)
  }, [value])

  return (
    <div className="mb-4">
      <label className="mb-1 block text-sm font-medium text-gray-700">
        {label} ({value}Hz)
      </label>
      <div className="flex flex-row gap-3">
        <Button
          onClick={() => {
            setValue(value - step)
          }}>
          -
        </Button>
        <Slider
          min={min}
          max={max}
          step={step}
          value={[value]}
          onValueChange={(v: number[]) => {
            setValue(v[0])
          }}
        />
        <Button
          onClick={() => {
            setValue(value + step)
          }}>
          +
        </Button>
      </div>
    </div>
  )
}
