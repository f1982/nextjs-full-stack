'use client'

import UniversalSingleForm from './universal-single-form'
import ListMultipleSelect, {
  OptionItemData,
} from '@/components/molecule/list-multiple-select'
import ListSelector from '@/components/molecule/list-select'
import Spinner from '@/components/molecule/spinner'
import { Button } from '@/components/ui/button'
import { Wand2 } from 'lucide-react'
import { useState } from 'react'

function convertStringArrayToObjectArray(stringArray) {
  return stringArray.map((item, index) => ({
    label: item,
    value: item, // You can customize the value based on your needs
  }))
}

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
          select={(opt: OptionItemData) => {
            console.log('opt', opt)
            setSelectedOption(opt.value)
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
