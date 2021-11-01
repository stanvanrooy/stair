import { Route } from "../models/route";
import styles from "./flightRoute.module.css";

export interface IFlightRouteProps {
  routes: string[];
  route: Route;
  nextRoute?: Route;
}

const dateTimeToDate = (s: string): string => {
  const d = new Date(s);
  return d.toUTCString().split(' ').slice(0, 3).join(' ');
}

export const FlightRoute = (props: IFlightRouteProps) => {
  const outbound = <div className={styles.outbound}>
    <p>{dateTimeToDate(props.route.local_departure)}</p>
    <p><b>Outbound</b></p>
  </div>
  return <>
    {props.route.flyFrom === props.routes[0] ? outbound : null}
    <div className={styles.flight}>
      <div></div>
      <div></div>
      <div></div>
    </div>
  </>
}
