'use client'

import UniversalSingleForm from './universal-single-form'
import ListSelector from '@/app/_modules/components/molecule/list-selector'
import Spinner from '@/app/_modules/components/molecule/spinner'
import { Button } from '@/app/_modules/components/ui/button'
import { Wand2 } from 'lucide-react'
import { useState } from 'react'

export default function SelectEditForm({
  value,
  fieldName,
  optionsLoader,
  onSubmit
}: {
  value?: string
  fieldName: string
  optionsLoader: any
  onSubmit: any
}) {
  const [selectOptions, setSelectOptions] = useState<string[] | null>(null)

  const [selectedOption, setSelectedOption] = useState<any>(value)
  const [isLoading, setIsLoading] = useState(false)

  async function requestOptions() {
    setIsLoading(true)
    const { data } = await optionsLoader()

    setSelectOptions(data)
    setIsLoading(false)
  }

  return (
    <div className="flex flex-col gap-6">
      <div></div>

      {selectOptions && (
        <ListSelector
          label={fieldName}
          options={selectOptions}
          callback={(opt: any) => {
            setSelectedOption(opt)
          }}
        />
      )}
      <UniversalSingleForm
        fieldName={fieldName}
        defaultData={selectedOption}
        handleSubmit={onSubmit}
        extraButtons={
          <Button
            disabled={isLoading}
            className="flex flex-row gap-3"
            onClick={requestOptions}>
            {isLoading ? <Spinner /> : <Wand2 />}
            <span>Generate {fieldName} By AI</span>
          </Button>
        }></UniversalSingleForm>
    </div>
  )
}
