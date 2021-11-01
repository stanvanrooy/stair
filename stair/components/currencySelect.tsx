import { Dropdown, IDropdownOption } from "@fluentui/react"
import styles from "./currencySelect.module.css"

export interface ICurrencySelectProps {
  value: string;
  onChange: (v: string) => void;
}

const options: IDropdownOption[] = [
  { key: 'EUR', text: '€', },
  { key: 'USD', text: 'US$' },
  { key: 'JPY', text: '¥' },
  { key: 'GPB', text: '£' },
  { key: 'CAD', text: 'C$' },
  { key: 'CHF', text: 'CHF' },
]

const symbolToCountryMap = {
  'EUR': 'eu',
  'USD': 'us',
  'JPY': 'jp',
  'GPB': 'gb',
  'CAD': 'ca',
  'CHF': 'ch',
}

const renderOption = (p) => {
  if (p.hasOwnProperty('length')) {
    p = p[0];
  }
  return <div className={styles.option}>
    <img src={`https://flagicons.lipis.dev/flags/4x3/${symbolToCountryMap[p.key]}.svg`} /> <p>{p.text}</p>
  </div>
}

export const CurrencySelect = (props: ICurrencySelectProps) => {
  return <Dropdown
    options={options}
    onChange={(_: any, option: IDropdownOption) =>  props.onChange(option.key.toString())}
    selectedKey={props.value}
    onRenderOption={renderOption}
    onRenderTitle={renderOption}
  />
}