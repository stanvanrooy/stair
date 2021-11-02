import { Dispatch, SetStateAction, useEffect, useState } from 'react';
import { Route } from './models/route'
import { DateRange } from './models/dateRange'

export const secondsToString = (s: number): string => {
  const h = Math.floor(s / 3600);
  const m = Math.floor(s % 3600 / 60);
  return `${h}H ${m}M`; 
}

export const dateTimeToDate = (s: string): string => {
  const d = new Date(s);
  return d.toUTCString().split(' ').slice(0, 3).join(' ');
}

export const navigateToExternalUrl = (name: string, url: string) => {
  // @ts-ignore
  sa_event(`navigate to ${name}`, () => window.open(url, '_blank').focus());
}

const parseJson = (s: string) => {
  if (!s)
    return null;
  return JSON.parse(s);
}
const serializeJson = (s: object) => JSON.stringify(s);

const parseDateRange = (dt: string) => {
  if (!dt)
    return null;
  const obj = JSON.parse(dt) as DateRange;
  obj.end = obj.end ? new Date(obj.end) : null;
  obj.start = obj.start ? new Date(obj.start) : null;
  return obj;
}

const serializeJsonDateRange = (dr: DateRange): string => JSON.stringify({
  start: dr.start ? dr.start.getTime() : null,
  end: dr.end ? dr.end.getTime() : null,
})

export const jsonOptions = { parse: parseJson, serialize: serializeJson };
export const jsonOptionsDate = { parse: parseDateRange, serialize: serializeJsonDateRange };
export const numberOptions = { parse: x => parseInt(x), serialize: x => x.toString() };

export const useQueryState = <T>(name: string, def?: any, options?: object): [T, Dispatch<SetStateAction<T>>]=> {
  const [value, setValue] = useState<T>(def ?? null);
  options = options ?? {};

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    let v = params.get(name);
    if (options.hasOwnProperty('parse')) {
      v = options['parse'](v);
    }
    if (v !== null) {
      setValue(v as any);
    }
  }, [true])

  useEffect(() => {
    if (!value) {
      return;
    }
    const params = new URLSearchParams(window.location.search);
    let newValue = value;
    if (options.hasOwnProperty('serialize')) {
      newValue = options['serialize'](newValue);
    }
    params.set(name, newValue as any);
    window.history.replaceState({}, '', `${window.location.pathname}?${params.toString()}`);
  }, [value]);

  return [value, setValue];
}


export const getImageForAirline = (airline: string) => {
  let url = "";
  switch(airline) {
    case "AY":
      url = "https://logodix.com/logo/992919.png";
      break;
    case "TK":
      url = "https://1000logos.net/wp-content/uploads/2020/04/Turkish_Airlines_logo.png";
      break;
    default:
      console.log('no image for: ', airline);
      return null;
  }
  return url;
}

export const getReadableNameForAirport = (airline: string) => {
  let name = "";
  switch(airline) {
    case "AY":
      name = "Finnair";
      break;
    case "SQ":
      name = "Singapore Airlines";
      break;
    case "TK":
      name = "Turkish Airlines";
      break;
    default:
      console.log('no name for: ', airline);
      return null;
  }
  return name;
}

export const getDuration = (s: string, e: string): string => {
  const start = new Date(s);
  const end = new Date(e);
  const diff = end.getTime() - start.getTime();
  return secondsToString(diff / 1000);
}

export const buildWtcPair = (route: Route) => `${route.flyFrom}-${route.flyTo}-${route.airline}-${route.fare_classes}`
