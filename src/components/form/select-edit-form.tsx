'use client'

import { useState } from 'react'

import { Wand2 } from 'lucide-react'

import ListMultipleSelect, {
  OptionItemData,
} from '@/components/molecule/list-multiple-select'
import Spinner from '@/components/molecule/spinner'
import { Button } from '@/components/ui/button'

import UniversalSingleForm from './universal-single-form'

function convertStringArrayToObjectArray(stringArray) {
  return stringArray.map((item, index) => ({
    label: item,
    value: item, // You can customize the value based on your needs
  }))
}

export default function SelectEditForm({
  defaultValue,
  fieldName,
  optionsFactory,
  onSubmit,
}: {
  defaultValue?: string
  fieldName: string
  optionsFactory: any
  onSubmit: any
}) {
  const [selectOptions, setSelectOptions] = useState<OptionItemData[] | null>(
    null,
  )
  const [selectedOption, setSelectedOption] = useState<any>(defaultValue)

  const [isLoading, setIsLoading] = useState(false)

  async function requestOptions() {
    setIsLoading(true)
    const { data } = await optionsFactory()

    if (typeof data[0] === 'string') {
      const opts = convertStringArrayToObjectArray(data)
      setSelectOptions(opts)
    } else {
      setSelectOptions(data)
    }
    setIsLoading(false)
  }

  return (
    <div className="flex flex-col gap-6">
      {selectOptions && (
        <ListMultipleSelect
          label="Paragraph Selector"
          options={selectOptions}
          onSelect={(opt: OptionItemData) => {
            setSelectedOption(opt.value)
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
