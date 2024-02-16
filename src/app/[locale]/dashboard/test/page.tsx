'use client'

import ListMultipleSelect, {
  OptionItemData,
} from '@/components/molecule/list-multiple-select'
import { Button } from '@/components/ui/button'
import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/src/components/ui/dropdown-menu'
// import {
//   DropdownMenu,
//   DropdownMenuCheckboxItem,
//   DropdownMenuContent,
//   DropdownMenuLabel,
//   DropdownMenuSeparator,
//   DropdownMenuTrigger,
// } from '@/components/ui/dropdown-menu'
import { DropdownMenuCheckboxItemProps } from '@radix-ui/react-dropdown-menu'
import * as React from 'react'

type Checked = DropdownMenuCheckboxItemProps['checked']

export default function page() {
  return (
    <div>
      <DropdownMenuCheckboxes />
    </div>
  )
}

export function DropdownMenuCheckboxes() {
  const [showStatusBar, setShowStatusBar] = React.useState<Checked>(true)
  const [showActivityBar, setShowActivityBar] = React.useState<Checked>(false)
  const [showPanel, setShowPanel] = React.useState<Checked>(false)

  const mockData = [
    { label: 'Option 1', value: 'value1' },
    { label: 'Option 2', value: 'value2' },
    { label: 'Option 3', value: 'value3' },
    // Add more objects as needed
  ]
  return (
    <div>
      <ListMultipleSelect
        label="Paragraph Selector"
        options={mockData}
        select={(opt: OptionItemData) => {
          console.log('opt', opt)
        }}
      />
    </div>
  )
}
