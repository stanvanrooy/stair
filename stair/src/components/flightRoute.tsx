import { dateTimeToDate, secondsToString, getReadableNameForAirport, getDuration, buildWtcPair } from "../helpers";
import { Route } from "../models/route";
import styles from "./flightRoute.module.css";
import { FlightStop } from "./flightStop";
import { isMobile } from "react-device-detect"; 

export interface IFlightRouteProps {
  routes: string[];
  route: Route;
  nextRoute?: Route;
}

const getTime = (dt: string): string => {
  const date = new Date(dt);
  return `${date.getHours()}:${date.getMinutes()}`
}

const getCreditUrl = (route: Route) => `https://www.wheretocredit.com/calculator#${buildWtcPair(route)}`;

export const FlightRoute = (props: IFlightRouteProps) => {
  const outbound = <div className={styles.outbound}>
    <p>{dateTimeToDate(props.route.local_departure)}</p>
    <p><b>Outbound</b></p>
  </div>
  return <>
    {props.route.flyFrom === props.routes[0] ? outbound : null}
    <div className={styles.flight}>
      <p className={styles.duration}>{getDuration(props.route.local_departure, props.route.local_arrival)}</p>
      <div>
        <div className={styles.time}>
          <div>{getTime(props.route.local_departure)}</div> 
          <div>{props.route.cityFrom} ({props.route.flyFrom})</div>
        </div>
        <div className={styles.time}>
          <div>{props.route.airline}{props.route.operating_flight_no ?? props.route.flight_no}</div>
          <div>{getReadableNameForAirport(props.route.airline)}</div>
        </div>
        <div className={styles.time}>
          <div>{getTime(props.route.local_arrival)}</div> 
          <div>{props.route.cityTo} ({props.route.flyTo})</div>
        </div>
      </div>
      {!isMobile ? <div className={styles.info}>
        <div>
          <p><b>Fareclass </b></p>
          <p>{props.route.fare_classes}</p>
        </div>
        <div>
          <p><b>Recheck </b></p>
          <p>{props.route.bags_recheck_required ? 'Yes' : 'No'}</p>
        </div>
        <div>
          <p><b>Points </b></p>
          <p><a target="_blank" rel="noreferrer" href={getCreditUrl(props.route)}>wheretocredit.com</a></p>
        </div>
      </div> : null}
    </div>
    {props.nextRoute !== null ? <FlightStop className={styles.flight} from={props.route} to={props.nextRoute} /> : null}
  </>
}
