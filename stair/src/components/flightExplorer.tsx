import { TextField } from "@fluentui/react";
import { useMemo } from "react";
import { numberOptions, useQueryState } from "../helpers";
import { Flight } from "../models/flight"

import styles from "./flightExplorer.module.css"
import { FlightView } from "./flightView"
import { SortSelect } from "./sortSelect";

export interface IFlightExplorerProps {
  flights: Flight[]
}

const sort = (a: number, b: number): number => {
  if (a === b) return 0;
  if (a < b) return -1;
  return 1;
}

export const FlightExplorer = (props: IFlightExplorerProps) => {
  const [selectedSort, setSelectedSort] = useQueryState<string>('sort', 'price');
  const [maxDuration, setMaxDuration] = useQueryState<number | null>('maxdur', null, numberOptions);

  const sortedFlights = useMemo(() => {
    let flights = [];
    if (selectedSort === 'price') {
      flights = props.flights;
    } else if (selectedSort === 'duration') {
      flights = props.flights.sort((a, b) => sort(a.duration.total, b.duration.total));
    } else if (selectedSort === 'distance') {
      flights = props.flights.sort((a, b) => -sort(a.distance, b.distance));
    } else if (selectedSort === 'nights') {
      flights = props.flights.sort((a, b) => -sort(a.nightsInDest, b.nightsInDest));
    }
    if (!flights || flights.length === 0 || !maxDuration) {
      return flights;
    }
    return flights.filter(f => {
      const valid = (s: number) => {
        if (s === 0)
          return true;
        return s / 60 / 60 < maxDuration;
      }
      return valid(f.duration.departure) && valid(f.duration.return);
    });
  }, [selectedSort, props.flights?.length, maxDuration])

  if (props.flights === null) {
    return null;
  }

  return <div className={styles.container}>
    <br />
    {props.flights.length > 0 ? <div className={styles.filters}>
      <SortSelect value={selectedSort} onChange={setSelectedSort} />
      <TextField
        label={"Max. duration"}
        type={"number"}
        value={maxDuration?.toString()}
        onChange={(_: any, nv?: string) => setMaxDuration(nv && parseInt(nv) > 0 ? parseInt(nv) : null)}
        suffix={maxDuration && maxDuration > 1 ? "hours" : "hour"}
        min={1}
      />
    </div> : null}
    <br />
    {sortedFlights.map(f => <FlightView flight={f} key={f.id} />)}
  </div>
}
