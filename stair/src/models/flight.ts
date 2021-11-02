import { Country } from "./country";
import { Route } from "./route";

interface Duration {
  departure: number;
  return: number;
  total: number;
}

export interface Flight {
  id: string;
  countryFrom: Country;
  countryTo: Country;
  deep_link: string;
  airlines: string[];
  duration: Duration;
  local_arrival: string;
  local_departure: string;
  price: string;
  route: Route[];
  routes: string[][];
  flyTo: string;
  flyFrom: string;
  cityTo: string;
  cityFrom: string;
  conversion: object;
  distance: number;
}
