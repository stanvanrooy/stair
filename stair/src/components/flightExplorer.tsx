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

export const FlightExplorer = (props: IFlightExplorerProps) => {
  const [selectedSort, setSelectedSort] = useQueryState<string>('sort', 'price');
  const [maxDuration, setMaxDuration] = useQueryState<number | null>('maxdur', null, numberOptions);

  const sortedFlights = useMemo(() => {
    let flights = [];
    if (selectedSort === 'price') {
      flights = props.flights;
    } else if (selectedSort === 'duration') {
      flights = props.flights.sort((a, b) => {
        const ad = a.duration.total;
        const bd = b.duration.total;
        if (ad === bd) return 0;
        if (ad < bd) return -1;
        return 1;
      });
    }
    if (!flights || flights.length === 0 || maxDuration === null) {
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
  }, [selectedSort, props.flights, maxDuration])

  if (props.flights === null) {
    return null;
  }

  return <div className={styles.container}>
    <br />
    <div className={styles.filters}>
      <SortSelect value={selectedSort} onChange={setSelectedSort} />
      <TextField
        label={"Max. duration"}
        type={"number"}
        value={maxDuration?.toString()}
        onChange={(_: any, nv?: string) => setMaxDuration(nv && parseInt(nv) > 0 ? parseInt(nv) : null)}
        suffix={maxDuration && maxDuration > 1 ? "hours" : "hour"}
        min={1}
      />
    </div>
    <br />
    {sortedFlights.map(f => <FlightView flight={f} key={f.id} />)}
  </div>
}
