import AirportPicker from "../components/airportPicker";
import { Airport } from "../models/airport";
import { DateRange } from "../models/dateRange";

export interface IIndexProps {
  from?: Airport[];
  to?: Airport[];
  departure?: DateRange;
  arrival: DateRange;
}

const Index = (props: IIndexProps) => {
  return <div>
    <AirportPicker selected={props.from ?? []} onChange={(a: any) => console.log(a)} label={"From"} />
  </div>
}

export default Index;
