import { Icon } from "@fluentui/react";
import { useState } from "react";
import { buildWtcPair, dateTimeToDate, getImageForAirline, secondsToString } from "../helpers";
import { Flight } from "../models/flight";
import { Route } from "../models/route";
import { FlightRoute } from "./flightRoute";
import styles from "./flightView.module.css";

export interface IFlightViewProps {
  flight: Flight;
}

const currencyToSymbolMap = {
  'EUR': '€', 
  'USD': 'US$',
  'JPY': '¥',
  'GBP': '£',
  'CAD': 'C$',
  'CHF': 'CHF'
};

const getWtcUrl = (routes: Route[]) => {
  const pairs = routes.map(buildWtcPair);
  return `https://www.wheretocredit.com/calculator#${pairs.join('/')}`;
}

export const FlightView = (props: IFlightViewProps) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const getCurrency = () => Object.keys(props.flight.conversion).find(k => k != 'EUR') ?? 'EUR';
  const getPrice = () => props.flight.conversion[getCurrency()];

  const getGCMUrl = () => {
    const p = props.flight.route.map(r => `${r.flyFrom}-${r.flyTo}`).join();
    return "http://www.gcmap.com/map?MS=wls&MR=300&MX=720x360&PM=*&P=" + p;
  }

  const fly = [props.flight.flyFrom];
  const cit = [props.flight.cityFrom];

  const r = [...props.flight.route.slice(1, props.flight.route.length - 1)];
  for (const route of props.flight.route) {
    fly.push(route.flyTo);
    cit.push(route.cityTo);
  }

  return <>
    <div>
      <div className={styles.container}>
        <div className={styles.textCombo}>
          <p>{secondsToString(props.flight.duration.departure)}</p>
          <p>{dateTimeToDate(props.flight.local_departure)}</p>
        </div>
        <div className={styles.textCombo}>
          <p>{fly.join(' → ')}</p>
          <p>{cit.join(' → ')}</p>
        </div>
        <div className={styles.textCombo}>
          <p>{props.flight.airlines.join(', ')}</p>
          <p>{props.flight.airlines.map(a => <img key={a} className={styles.logo} src={getImageForAirline(a)} />)}</p>
        </div>
        <div className={styles.price}>
          <Icon iconName={!isExpanded ? 'chevronDown' : 'chevronUp'} onClick={_ => setIsExpanded(v => !v)} />
          <p>{currencyToSymbolMap[getCurrency()]} {getPrice()}</p>
        </div>
      </div>
    </div>
    {isExpanded ? <div>
      {props.flight.route.map((r, i, _) => <FlightRoute 
        key={r.id}
        route={r} 
        routes={props.flight.routes[0]}
        nextRoute={i + 1 < props.flight.route.length ? props.flight.route[i + 1] : null} 
      />)}
    </div> : null}
    <div className={styles.bottomBar}>
      <a rel="noreferrer" target="_blank" href={props.flight.deep_link}>Book this flight with Kiwi.</a> 
      <a rel="noreferrer" target="_blank" href={getGCMUrl()}>Route (GCM)</a>
      <a rel="noreferrer" target="_blank" href={getWtcUrl(props.flight.route)}>Points (wheretocredit)</a>
    </div>
  </>
}
