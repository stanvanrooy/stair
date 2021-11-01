import { useEffect, useState } from "react";
import { AirportPicker } from "../components/airportPicker";
import { DateRangePicker } from "../components/dateRangePicker";
import { CabinSelect } from "../components/cabinSelect";
import { AllianceSelect } from "../components/allianceSelect";
import { CurrencySelect } from "../components/currencySelect";
import { FlightExplorer } from "../components/flightExplorer";
import { Location } from "../models/location";
import { DateRange } from "../models/dateRange";
import { initializeIcons } from "@fluentui/font-icons-mdl2";
import { PrimaryButton, TextField, ThemeProvider } from "@fluentui/react";
import { theme } from "../styles/theme";

import "react-datepicker/dist/react-datepicker.css";
import styles from "./index.module.css";
import axios from "axios";
import { Flight } from "../models/flight";

export interface IIndexProps {
  from?: Location[];
  to?: Location[];
  departureRange?: DateRange;
  returnRange?: DateRange;
}

const formatDate = (d?: Date) => d ? `${d.getDate()}/${d.getMonth() + 1}/${d.getFullYear()}` : null;

const Index = (props: IIndexProps) => {
  // const [departureRange, setDepartureRange] = useState<DateRange>(null);
  const [departureRange, setDepartureRange] = useState<DateRange>({start: new Date(), end: new Date()});
  const [selectedCabin, setSelectedCabin] = useState("M")
  const [returnRange, setReturnRange] = useState<DateRange>(null);
  const [adults, setAdults] = useState(1);
  const [stops, setStops] = useState(-1);
  const [selectedAlliance, setSelectedAlliance] = useState<string | null>("");
  const [selectedCurrency, setSelectedCurrency] = useState<string | null>("EUR");

  const [flights, setFlights] = useState<Flight[] | null>(null);

  // const [state, setState] = useState<IIndexProps | null>(null);
  const [state, setState] = useState<IIndexProps | null>({
    from: [{name: 'ams', code: 'AMS', type: 'airport'}],
    to: [{name: 'bkk', code: 'BKK', type: 'airport'}],
  });
  useEffect(() => initializeIcons());

  const onChangeFrom = (a: Location[]) => {
    console.debug('onChangeFrom: ', a);
    const p = Object.assign({}, state);
    p.from = a;
    setState(p);
  }
  
  const onChangeTo = (a: Location[]) => {
    console.debug('onChangeTo: ', a);
    const p = Object.assign({}, state);
    p.to = a;
    setState(p);
  }

  const findFlights = () => {
    if (state === null) {
      // TODO: show error
    }

    const params = {
      fly_from: (state.from ?? []).map(l => l.code).join(','),
      fly_to: (state.to ?? []).map(l => l.code).join(','),
      date_from: formatDate(departureRange.start),
      date_to: formatDate(departureRange.end ?? departureRange.start),
      return_from: formatDate(returnRange?.start),
      return_to: formatDate(returnRange?.end ?? returnRange?.start),
      flight_type: returnRange !== null ? 'round' : 'oneway',
      adults: adults,
      curr: selectedCurrency,
    }

    if (stops > 0) {
      params['max_stopovers'] = stops;
    }

    if (selectedAlliance) {
      params['select_airlines'] = selectedAlliance;
    }

    const headers = {
      apikey: '9nfHUAXA3-gooRVP-TCxjPiIs7R_C4gQ',
    }

    axios({
      url: "https://tequila-api.kiwi.com/v2/search",
      params: params,
      headers: headers
    }).then(r => setFlights(r.data.data));
  }

  return <ThemeProvider theme={theme}>
    <div className={styles.container}>
      <div className={styles.fieldContainer}>
        <AirportPicker selected={state?.from ?? []} onChange={onChangeFrom} label={"Departure location"} />
        <AirportPicker selected={state?.to ?? []} onChange={onChangeTo} label={"Arrival location"} />
      </div>
      <div className={styles.fieldContainer}>
        <DateRangePicker onChange={setDepartureRange} placeholder={"Departure period"} />
        <DateRangePicker onChange={setReturnRange} placeholder={"Return period (optional)"}/>
      </div>
      <div className={styles.fieldContainer}>
        <CabinSelect value={selectedCabin} onChange={setSelectedCabin} />
        <TextField 
          type={"number"} 
          suffix={adults > 1 ? 'adults' : 'adult'} 
          value={adults.toString()} 
          onChange={(_: any, nv: string) => setAdults(parseInt(nv))} 
        />
        <TextField 
          type={"number"} 
          suffix={stops > 1 ? 'stops' : 'stop'} 
          value={stops.toString()} 
          onChange={(_: any, nv: string) => setStops(parseInt(nv))} 
        />
        <AllianceSelect value={selectedAlliance} onChange={setSelectedAlliance} />
      </div>
      <PrimaryButton onClick={_ => findFlights()}>Find flights!</PrimaryButton>
    </div>
    <div className={styles.currencySelectContainer}>
      <CurrencySelect value={selectedCurrency} onChange={setSelectedCurrency} />
    </div>
    <FlightExplorer flights={flights} />
  </ThemeProvider>
}

export default Index;
