'use client'

import { useState } from 'react'

import { Wand2 } from 'lucide-react'

import ListMultipleSelect, {
  OptionItemData,
} from '@/components/molecule/list-multiple-select'
import ListSelector from '@/components/molecule/list-select'
import Spinner from '@/components/molecule/spinner'
import { Button } from '@/components/ui/button'

import UniversalSingleForm from './universal-single-form'

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
  const [selectOptions, setSelectOptions] = useState<OptionItemData[] | null>(
    null,
  )

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
          onSelect={(opt: any) => {
            setSelectedOption(opt)
          }}
        />
      )}
      <UniversalSingleForm
        fieldName={fieldName}
        onSubmit={onSubmit}
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
