import { Dropdown, IDropdownOption } from "@fluentui/react"

export interface IAllianceSelectProps {
  value?: string;
  onChange: (v?: string) => void;
}

const options: IDropdownOption[] = [
  { text: 'Alliance', key: 'alliance' },
  { text: 'SkyTeam', key: 'SU,AR,AM,UX,AF,AZ,CI,MU,OK,DL,GA,KQ,KL,KE,ME,SV,RO,VN,MF' },
  { text: 'Star Alliance', key: 'JP,A3,AC,CA,AI,NZ,NH,OZ,OS,AV,SN,CM,OU,MS,OV,BR,LO,LH,SK,ZH,SQ,SA,LX,TP,TG,TK,UA' },
  { text: 'Oneworld', key: 'AA,BA,CX,AY,IB,JL,LA,MH,QF,QR,RJ,S7,UL' },
  { text: 'Milageplan', key: 'AS,EI,AA,BA,CX,DE,LY,EK,FJ,AY,HU,FI,JL,KE,LA,7H,QF,SQ' },
  { text: 'SkyWards', key: 'EK,TP,SA,S7,QF,MH,KE,JQ,B6,JL,G3,CM,AS,MK' },
  { text: 'Etihad Guest', key: 'EY,NZ,JU,UX,HM,AZ,NH,AA,OZ,PG,SN,OK,GA,HU,9W,KE,MH,WY,PR,AT,SK,UL,VA,G3' },
]

export const AllianceSelect = (props: IAllianceSelectProps) => {
  const onChange = (_: any, opt: IDropdownOption) => {
    if (opt.key === 'alliance') {
      props.onChange(null);
    } else {
      props.onChange(opt.key.toString())
    }
  }

  return <Dropdown
    options={options}
    selectedKey={props.value}
    placeholder={"Alliance"}
    onChange={onChange}
  />
}
