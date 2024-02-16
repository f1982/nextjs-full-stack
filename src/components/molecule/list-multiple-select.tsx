'use client'

import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle
} from '@/src/components/ui/card';
import { Button } from '../ui/button';

export type OptionItemData = { label: string; value: string }

export default function ListMultipleSelect({
  label,
  options,
  select,
}: {
  label?: string
  options: OptionItemData[]
  select?: (opt: OptionItemData) => void
}) {
  return (
    <div className="flex flex-col gap-3">
      <h3 className="text-xl">{label}</h3>
      {options.map((item: OptionItemData, index: number) => {
        return (
          <Card className="w-full" key={item.label}>
            <CardHeader>
              <CardTitle>{index}</CardTitle>
            </CardHeader>
            <CardContent>{item.value}</CardContent>
            <CardFooter className="flex justify-between">
              <Button onClick={() => select?.(item)}>Select</Button>
            </CardFooter>
          </Card>
        )
      })}
    </div>
  )
}
