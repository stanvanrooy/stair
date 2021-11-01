import { Country } from "./country";

interface Duration {
  departure: number;
  return: number;
  total: number;
}

export interface Flight {
  countryFrom: Country;
  countryTo: Country;
  deep_link: string;
  airlines: string[];
  duration: Duration;
  local_arrival: string;
  local_departure: string;
  price: string;
  routes: string[];
}
