import { useEffect, useState } from "react";
import { AirportPicker } from "../components/airportPicker";
import { DateRangePicker } from "../components/dateRangePicker";
import { CabinSelect } from "../components/cabinSelect";
import { FullScreenSpinner } from "../components/fullScreenSpinner";
import { AllianceSelect } from "../components/allianceSelect";
import { CurrencySelect } from "../components/currencySelect";
import { FlightExplorer } from "../components/flightExplorer";
import { Location } from "../models/location";
import { DateRange } from "../models/dateRange";
import { initializeIcons } from "@fluentui/font-icons-mdl2";
import { PrimaryButton, Spinner, SpinnerSize, TextField, ThemeProvider } from "@fluentui/react";
import { theme } from "../styles/theme";

import "react-datepicker/dist/react-datepicker.css";
import styles from "./index.module.css";
import axios from "axios";
import { Flight } from "../models/flight";

import { useQueryState } from 'next-usequerystate'

export interface IIndexProps {
  from?: Location[];
  to?: Location[];
  departureRange?: DateRange;
  returnRange?: DateRange;
}

const formatDate = (d?: Date) => d ? `${d.getDate()}/${d.getMonth() + 1}/${d.getFullYear()}` : null;

const Index = (props: IIndexProps) => { // const [departureRange, setDepartureRange] = useQueryState<DateRange>(null);
  const [isLoading, setIsLoading] = useState(false);
  
  const parseJson = (s: string) => {
    if (!s)
      return null;
    return JSON.parse(s);
  }
  const serializeJson = (s: object) => JSON.stringify(s);
  const jsonOptions = { parse: parseJson, serialize: serializeJson };

  const numberOptions = { parse: x => parseInt(x), serialize: x => x.toString() };

  const [departureRange, setDepartureRange] = useQueryState<DateRange>('departure', jsonOptions);
  const [selectedCabin, setSelectedCabin] = useQueryState('cabin');
  useEffect(() => {
    if (!selectedCabin) {
      setSelectedCabin('W');
    }
  }, [])

  const [returnRange, setReturnRange] = useQueryState<DateRange>('return', jsonOptions);
  const [adults, setAdults] = useQueryState<number | null>('adults', numberOptions);

  const [stops, setStops] = useQueryState<number | null>('stops', numberOptions);

  const [selectedAlliance, setSelectedAlliance] = useQueryState<string>('alliance');
  const [selectedCurrency, setSelectedCurrency] = useQueryState<string>("currency");
  useEffect(() => {
    if (!selectedCurrency || selectedCurrency.length === 0) {
      setSelectedCurrency('EUR');
    }
  }, []);
  const [flights, setFlights] = useState<Flight[] | null>(null);

  const [from, setFrom] = useQueryState<Location[]>('from', jsonOptions);
  const [to, setTo] = useQueryState<Location[]>('to', jsonOptions);

  useEffect(() => initializeIcons(), []);

  const onChangeFrom = (l: Location[]) => setFrom(l);
  const onChangeTo = (l: Location[]) => setTo(l);

  const findFlights = () => {
    const params = {
      fly_from: (from ?? []).map(l => l.code).join(','),
      fly_to: (to ?? []).map(l => l.code).join(','),
      date_from: formatDate(new Date(departureRange.start)),
      date_to: formatDate(new Date(departureRange.end ?? departureRange.start)),
      return_from: formatDate(returnRange?.start ? new Date(returnRange.start) : null),
      return_to: formatDate(new Date(returnRange?.end ?? returnRange?.start)),
      flight_type: returnRange !== null ? 'round' : 'oneway',
      adults: adults ?? 1,
      curr: selectedCurrency,
    }

    if (stops && stops > 0) {
      params['max_stopovers'] = stops;
    }

    if (selectedAlliance) {
      params['select_airlines'] = selectedAlliance;
    }

    const headers = {
      apikey: '9nfHUAXA3-gooRVP-TCxjPiIs7R_C4gQ',
    }

    setIsLoading(true)
    axios({
      url: "https://tequila-api.kiwi.com/v2/search",
      params: params,
      headers: headers
    })
      .then(r => setFlights(r.data.data))
      .then(_ => setIsLoading(false));
  }

  return <ThemeProvider theme={theme}>
    {isLoading ? <FullScreenSpinner /> : <><div className={styles.header}>
      <h1>Stair</h1>
      <p>Travel hacking made easy.</p>
    </div>
    <div className={styles.container}>
      <div className={styles.fieldContainer}>
        <AirportPicker selected={from ?? []} onChange={onChangeFrom} label={"Departure location"} />
        <AirportPicker selected={to ?? []} onChange={onChangeTo} label={"Arrival location"} />
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
          value={`${adults}`} 
          defaultValue={'1'}
          onChange={(_: any, nv: string) => setAdults(parseInt(nv))} 
        />
        <TextField 
          type={"number"} 
          suffix={stops > 1 ? 'stops' : 'stop'} 
          defaultValue={'-1'}
          value={`${stops}`} 
          onChange={(_: any, nv: string) => setStops(parseInt(nv))} 
        />
        <AllianceSelect value={selectedAlliance} onChange={setSelectedAlliance} />
      </div>
      <PrimaryButton onClick={_ => findFlights()}>Find flights!</PrimaryButton>
    </div>
    <br /> <br />
    <div className={styles.currencySelectContainer}>
      <CurrencySelect value={selectedCurrency} onChange={setSelectedCurrency} />
    </div>
    <FlightExplorer flights={flights} /></>}
  </ThemeProvider>
}

export default Index;
