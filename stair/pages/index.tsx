import { useEffect, useState } from "react";
import AirportPicker from "../components/airportPicker";
import { Location } from "../models/location";
import { DateRange } from "../models/dateRange";
import { initializeIcons } from "@fluentui/font-icons-mdl2";

export interface IIndexProps {
  from?: Location[];
  to?: Location[];
  departure?: DateRange;
  arrival: DateRange;
}


const Index = (props: IIndexProps) => {
  const [state, setState] = useState<IIndexProps | null>(null);
  useEffect(() => initializeIcons());

  const onChangeFrom = (a: Location[]) => {
    console.debug('onChangeFrom: ', a);
    const p = Object.assign({}, state);
    p.from = a;
    setState(p);
  }
  
  const onChangeTo = (a: Location[]) => {
    console.debug('onChangeTo: ', a);
    const p = Object.assign({}, state);
    p.to = a;
    setState(p);
  }

  return <div>
    <AirportPicker selected={state?.from ?? []} onChange={onChangeFrom} label={"From"} />
    <AirportPicker selected={state?.to ?? []} onChange={onChangeTo} label={"To"} />
  </div>
}

export default Index;
