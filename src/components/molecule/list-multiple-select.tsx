'use client'

import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'

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
      <h3 className="text-xl">{label}</h3>
      {options.map((item: OptionItemData, index: number) => {
        return (
          <Card className="w-full" key={item.label}>
            <CardContent>
              {item.value}{' '}
              <Button onClick={() => onSelect?.(item)}>Select</Button>
            </CardContent>
          </Card>
        )
      })}
    </div>
  )
}
