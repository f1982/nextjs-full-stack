'use client'

import UniversalSingleForm from './universal-single-form'
import Spinner from '@/app/_modules/components/molecule/spinner'
import { Button } from '@/app/_modules/components/ui/button'
import { Wand2 } from 'lucide-react'
import { useState } from 'react'

export default function GenEditForm({
  value,
  rows = 5,
  fieldName,
  optionsLoader,
  onSubmit
}: {
  value?: string
  rows?: number
  fieldName: string
  optionsLoader: any
  onSubmit: any
}) {
  const [selectedOption, setSelectedOption] = useState<any>(value)
  const [isLoading, setIsLoading] = useState(false)

  async function requestOptions() {
    setIsLoading(true)
    const { data } = await optionsLoader()

    setSelectedOption(data)
    setIsLoading(false)
  }

  return (
    <div className="flex flex-col gap-6">
      <UniversalSingleForm
        fieldName={fieldName}
        defaultData={selectedOption}
        handleSubmit={onSubmit}
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
