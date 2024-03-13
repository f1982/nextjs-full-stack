import { Button } from '@/components/ui/button'
import { Slider } from '@/components/ui/slider'
import clsx from 'clsx'
import { Minus, Plus, PlusIcon } from 'lucide-react'
import { PropsWithChildren, useEffect, useState } from 'react'
import { useDebounceCallback } from 'usehooks-ts'

const debounceTime = 500

interface SliderButtonsProps extends PropsWithChildren {
  label: string
  unit: string
  defaultValue: number
  min: number
  max: number
  step: number
  handleValueChange: (value: number) => void
  className?: string
}

export default function SliderButtons({
  label,
  unit = '',
  defaultValue,
  min,
  max,
  step,
  className,
  children,
  handleValueChange,
}: SliderButtonsProps) {
  const [value, setValue] = useState(defaultValue)

  const debounceValue = useDebounceCallback(handleValueChange, debounceTime)

  useEffect(() => {
    debounceValue(value)
  }, [value])

  return (
    <div className={clsx('mb-4', className)}>
      <label className="mb-1 block text-sm font-medium text-gray-700">
        {label} ({value} {unit})
      </label>
      <div className="flex flex-row gap-3">
        <Button
          className="px-1"
          variant={'ghost'}
          onClick={() => {
            setValue(value - step)
          }}>
          <Minus />
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
          className="px-1"
          variant={'ghost'}
          onClick={() => {
            setValue(value + step)
          }}>
          <Plus />
        </Button>
        {children}
      </div>
    </div>
  )
}
