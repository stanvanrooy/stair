import { Flight } from "../models/flight"

import styles from "./flightExplorer.module.css"
import { FlightView } from "./flightView"

export interface IFlightExplorerProps {
  flights: Flight[]
}

export const FlightExplorer = (props: IFlightExplorerProps) => {
  if (props.flights === null) {
    return null;
  }

  return <div className={styles.container}>
    {props.flights.map(f => <FlightView flight={f} key={f.id} />)}
  </div>
}
