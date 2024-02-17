import ListMultipleSelect, { OptionItemData } from "@/components/molecule/list-multiple-select"

export default function page() {
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
