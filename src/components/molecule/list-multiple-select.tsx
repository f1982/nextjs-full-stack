'use client'

import { Button } from '../ui/button'

export type OptionItemData = { label: string; value: string }

export default function ListMultipleSelect({
  label,
  options,
  onSelect,
}: {
  label?: string
  options: OptionItemData[]
  onSelect?: (opt: OptionItemData) => void
}) {
  return (
    <div className="flex flex-col gap-3">
      <h3>{label}</h3>
      {options.map((item: OptionItemData, index: number) => {
        return (
          <div className="flex flex-row gap-3">
            <Button onClick={() => onSelect?.(item)}>Select</Button>
            {item.value}
          </div>
        )
      })}
    </div>
  )
}
