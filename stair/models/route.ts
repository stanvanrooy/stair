export interface Route {
  flyFrom: string;
  flyTo: string;
  cityFrom: string;
  cityTo: string;
  airline: string;
  fare_classes: string;
  fare_category: string;
  local_departure: string;
  local_arrival: string;
  utc_departure: string;
  utc_arrival: string;
  bags_recheck_required: boolean;
  operating_flight_no: string;
  flight_no: string;
}