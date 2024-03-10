'use client'

import UniversalSingleForm from './universal-single-form'
import Spinner from '@/components/molecule/spinner'
import { Button } from '@/components/ui/button'
import { APIResponse } from '@/types/types'
import { Wand2 } from 'lucide-react'
import { useState } from 'react'

export default function GenEditForm({
  value,
  rows = 5,
  fieldName,
  generator,
  submission,
}: {
  value?: string
  rows?: number
  fieldName: string
  generator: () => Promise<APIResponse<string | null>>
  submission: (data: { value: string }) => Promise<APIResponse<any>>
}) {
  const [selectedOption, setSelectedOption] = useState<any>(value)
  const [isLoading, setIsLoading] = useState(false)

  async function requestOptions() {
    setIsLoading(true)
    const { data } = await generator()

    setSelectedOption(data)
    setIsLoading(false)
  }

  return (
    <div className="flex flex-col gap-6">
      <UniversalSingleForm
        fieldName={fieldName}
        defaultData={selectedOption}
        handleSubmit={submission}
        rows={rows}
        extraButtons={
          <Button
            disabled={isLoading}
            className="flex flex-row gap-3"
            onClick={requestOptions}>
            {isLoading ? <Spinner /> : <Wand2 />}
            <span>Generate {fieldName}</span>
          </Button>
        }></UniversalSingleForm>
    </div>
  )
}
