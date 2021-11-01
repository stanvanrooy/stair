import { Icon } from "@fluentui/react";
import { useState } from "react";
import { Flight } from "../models/flight";
import { FlightRoute } from "./flightRoute";
import styles from "./flightView.module.css";

export interface IFlightViewProps {
  flight: Flight;
}

const secondsToString = (s: number): string => {
  const h = Math.floor(s / 3600);
  const m = Math.floor(s % 3600 / 60);
  return `${h}H ${m}M`; 
}

const dateTimeToDate = (s: string): string => {
  const d = new Date(s);
  return d.toUTCString().split(' ').slice(0, 3).join(' ');
}

const currencyToSymbolMap = {
  'EUR': '€', 
  'USD': 'US$',
  'JPY': '¥',
  'GPB': '£',
  'CAD': 'C$',
  'CHF': 'CHF'
};

const getImageForAirline = (airline: string) => {
  let url = "";
  switch(airline) {
    case "AY":
      url = "https://logodix.com/logo/992919.png";
      break;
    default:
      console.log('no image for: ', airline);
      return null;
  }
  return <img className={styles.logo} key={url} src={url} />
}

export const FlightView = (props: IFlightViewProps) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const getCurrency = () => Object.keys(props.flight.conversion).find(k => k != 'EUR') ?? 'EUR';
  const getPrice = () => props.flight.conversion[getCurrency()];

  const getGCMUrl = () => {
    const p = props.flight.route.map(r => `${r.flyFrom}-${r.flyTo}`).join();
    return "http://www.gcmap.com/map?MS=wls&MR=300&MX=720x360&PM=*&P=" + p;
  }

  return <>
    <div>
      <div className={styles.container}>
        <div className={styles.textCombo}>
          <p>{secondsToString(props.flight.duration.departure)}</p>
          <p>{dateTimeToDate(props.flight.local_departure)}</p>
        </div>
        <div className={styles.textCombo}>
          <p>{props.flight.flyFrom} → {props.flight.flyTo}</p>
          <p>{props.flight.cityFrom} → {props.flight.cityTo}</p>
        </div>
        <div className={styles.textCombo}>
          <p>{props.flight.airlines.join(', ')}</p>
          <p>{props.flight.airlines.map(getImageForAirline)}</p>
        </div>
        <div className={styles.price}>
          <Icon iconName={!isExpanded ? 'chevronDown' : 'chevronUp'} onClick={_ => setIsExpanded(v => !v)} />
          <p>{currencyToSymbolMap[getCurrency()]} {getPrice()}</p>
        </div>
      </div>
    </div>
    {isExpanded ? <div>
      {props.flight.route.map((r, i) => <FlightRoute 
        route={r} 
        routes={props.flight.routes[0]}
        nextRoute={props.flight.route.length < i ? props.flight.route[i + 1] : null} 
      />)}
    </div> : null}
    <div className={styles.bottomBar}>
      <a href={props.flight.deep_link}>Book this flight with Kiwi.</a> <a href={getGCMUrl()}>Route (GCM)</a>
    </div>
  </>
}
