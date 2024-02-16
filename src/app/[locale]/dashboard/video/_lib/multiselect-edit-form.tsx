'use client'

import UniversalSingleForm from './universal-single-form'
import ListMultipleSelect from '@/components/molecule/list-multiple-select'
import ListSelector from '@/components/molecule/list-select'
import Spinner from '@/components/molecule/spinner'
import { Button } from '@/components/ui/button'
import { Wand2 } from 'lucide-react'
import { useState } from 'react'

export default function SelectEditForm({
  value,
  fieldName,
  generator,
  onSubmit,
}: {
  value?: string
  fieldName: string
  generator: any
  onSubmit: any
}) {
  const [selectOptions, setSelectOptions] = useState<string[] | null>(null)

  const [selectedOption, setSelectedOption] = useState<any>(value)
  const [isLoading, setIsLoading] = useState(false)

  async function requestOptions() {
    setIsLoading(true)
    const { data } = await generator()

    setSelectOptions(data)
    setIsLoading(false)
  }

  return (
    <div className="flex flex-col gap-6">
      <div></div>

      {selectOptions && (
        <ListMultipleSelect
          label={fieldName}
          options={selectOptions}
          select={(opt: any) => {
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
