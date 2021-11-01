import { Dropdown, IDropdownOption } from "@fluentui/react"

export interface ICabinSelectProps {
  value: string;
  onChange: (v: string) => void;
}

const options: IDropdownOption[] = [
  { text: 'Economy', key: 'M' },
  { text: 'Economy premium', key: 'W' },
  { text: 'Business', key: 'C' },
  { text: 'First', key: 'F' },
]

export const CabinSelect = (props: ICabinSelectProps) => {
  const onChange = (_: any, option?: IDropdownOption) => {
    if (option === null) {
      return;
    }
    props.onChange(option.key.toString());
  }

  return <Dropdown
    options={options}
    selectedKey={props.value}
    onChange={onChange}
  />
}
