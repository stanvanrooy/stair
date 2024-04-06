import { getDuration } from "../helpers";
import { Route } from "../models/route";
import styles from "./flightStop.module.css";

export interface IFlightStopProps {
  from: Route;
  to: Route;
  className: string;
}

export const FlightStop = (props: IFlightStopProps) => {
  return <div className={props.className}>
    <p className={styles.duration}>{getDuration(props.from.local_arrival, props.to.local_departure)}</p>
    <p className={styles.stop}>Stop in {props.from.cityTo} ({props.from.flyTo})</p>
  </div>
}
