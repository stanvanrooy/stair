import { Icon } from "@fluentui/react";
import { useMemo, useState } from "react";
import { isMobile } from "react-device-detect";
import { buildWtcPair, dateTimeToDate, getImageForAirline, navigateToExternalUrl, secondsToString } from "../helpers";
import { Flight } from "../models/flight";
import { Route } from "../models/route";
import { FlightRoute } from "./flightRoute";
import styles from "./flightView.module.css";

export interface IFlightViewProps {
  flight: Flight;
  key: any;
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

  const fly = useMemo(() => {
    if (isMobile) {
      return [props.flight.flyFrom, props.flight.flyTo];
    }

    const fly = [props.flight.flyFrom];
    for (const route of props.flight.route) {
      fly.push(route.flyTo);
    }

    return fly;
  }, [isMobile, props.flight])

  const cit = useMemo(() => {
    if (isMobile) {
      return [];
    }

    const cit = [props.flight.cityFrom];
    for (const route of props.flight.route) {
      cit.push(route.cityTo);
    }

    return cit;
  }, [isMobile, props.flight])

  const getFormattedPrice = () => `${currencyToSymbolMap[getCurrency()]}${getPrice()}`;

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
          <p>{props.flight.distance}</p>
        </div>
        {!isMobile ? <div className={styles.textCombo}>
          <p>{props.flight.airlines.join(', ')}</p>
          <p>{props.flight.airlines.map(a => <img key={a} className={styles.logo} src={getImageForAirline(a)} />)}</p>
        </div> : null}
        <div className={styles.price}>
          <Icon iconName={!isExpanded ? 'chevronDown' : 'chevronUp'} onClick={_ => setIsExpanded(v => !v)} />
          <p><b>{getFormattedPrice()}</b></p>
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
      <a onClick={_ => navigateToExternalUrl('kiwi', props.flight.deep_link)}>Book this flight with Kiwi.</a> 
      <a onClick={_ => navigateToExternalUrl('gcm', getGCMUrl())}>Route (GCM)</a>
      <a onClick={_ => navigateToExternalUrl('wtc', getWtcUrl(props.flight.route))}>Points (wheretocredit)</a>
    </div>
  </>
}
