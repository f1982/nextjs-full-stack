'use client'

import { useState } from 'react'

import { APIResponse } from '@/types/types'
import { Wand2 } from 'lucide-react'

import Spinner from '@/components/molecule/spinner'
import { Button } from '@/components/ui/button'

import UniversalSingleForm from './universal-single-form'

export default function GenEditForm({
  value,
  rows = 5,
  fieldName,
  optionsFactory,
  onSubmit: handleSubmit,
}: {
  value?: string
  rows?: number
  fieldName: string
  optionsFactory: () => Promise<APIResponse<string | null>>
  onSubmit: (data: { value: string }) => Promise<APIResponse<any>>
}) {
  const [selectedOption, setSelectedOption] = useState<any>(value)
  const [isLoading, setIsLoading] = useState(false)

  async function requestOptions() {
    setIsLoading(true)
    const { data } = await optionsFactory()

    setSelectedOption(data)
    setIsLoading(false)
  }

  return (
    <div className="flex flex-col gap-6">
      <p>value: {value}</p>
      <UniversalSingleForm
        fieldName={fieldName}
        defaultValue={value}
        onSubmit={handleSubmit}
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
