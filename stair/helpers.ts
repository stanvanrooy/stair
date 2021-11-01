import { Route } from './models/route'

export const secondsToString = (s: number): string => {
  const h = Math.floor(s / 3600);
  const m = Math.floor(s % 3600 / 60);
  return `${h}H ${m}M`; 
}

export const dateTimeToDate = (s: string): string => {
  const d = new Date(s);
  return d.toUTCString().split(' ').slice(0, 3).join(' ');
}

export const getImageForAirline = (airline: string) => {
  let url = "";
  switch(airline) {
    case "AY":
      url = "https://logodix.com/logo/992919.png";
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
