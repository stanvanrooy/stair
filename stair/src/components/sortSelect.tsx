import { Dropdown, IDropdownOption } from "@fluentui/react"

export interface ISortSelectProps {
  value: string;
  onChange: (s: string) => void;
}

const options = [
  {key: 'price', text: 'Price'},
  {key: 'duration', text: 'Duration'},
  {key: 'nights', text: 'Nights'},
]

export const SortSelect = (props: ISortSelectProps) => {
  return <Dropdown
    options={options}
    selectedKey={props.value}
    onChange={(_: any, opt: IDropdownOption) => props.onChange(opt.key.toString())}
    label={"Sort by"}
  />
}