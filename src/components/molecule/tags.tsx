import { Badge } from '../ui/badge'
import React from 'react'

export default function Tags({ data }: { data: string[] }) {
  return (
    <>
      <div className="flex flex-wrap gap-2">
        {data.map((tag: string) => {
          return <Badge key={tag}>{tag}</Badge>
        })}
      </div>
    </>
  )
}
