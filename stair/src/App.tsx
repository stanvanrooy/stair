import { useEffect, useState } from "react";
import { AirportPicker } from "./components/airportPicker";
import { DateRangePicker } from "./components/dateRangePicker";
import { CabinSelect } from "./components/cabinSelect";
import { FullScreenSpinner } from "./components/fullScreenSpinner";
import { AllianceSelect } from "./components/allianceSelect";
import { CurrencySelect } from "./components/currencySelect";
import { FlightExplorer } from "./components/flightExplorer";
import { Flight } from "./models/flight";
import { Location } from "./models/location";
import { DateRange } from "./models/dateRange";
import { initializeIcons } from "@fluentui/font-icons-mdl2";
import { Icon, PrimaryButton, TextField, ThemeProvider } from "@fluentui/react";
import { theme } from "./styles/theme";
import { jsonOptions, jsonOptionsDate, numberOptions, useQueryState } from "./helpers";

import "react-datepicker/dist/react-datepicker.css";
import "./styles/globals.css";
import styles from "./App.module.css";
import axios from "axios";
import { BrowserView } from "react-device-detect";

export interface IIndexProps {
  from?: Location[];
  to?: Location[];
  departureRange?: DateRange;
  returnRange?: DateRange;
}

const formatDate = (d?: Date) => d ? `${d.getDate()}/${d.getMonth() + 1}/${d.getFullYear()}` : null;

const getHref = () => {
  try {
    return window.location.href;
  } catch {
    return "";
  }
}

const App = (props: IIndexProps) => { // const [departureRange, setDepartureRange] = useQueryState<DateRange>(null);
  const [isLoading, setIsLoading] = useState(false);

  const [departureRange, setDepartureRange] = useQueryState<DateRange>('departure', null, jsonOptionsDate);
  const [selectedCabin, setSelectedCabin] = useQueryState<string>('cabin', 'W');

  const [returnRange, setReturnRange] = useQueryState<DateRange>('return', null, jsonOptionsDate);
  const [adults, setAdults] = useQueryState<number | null>('adults', 1, numberOptions);

  const [stops, setStops] = useQueryState<number | null>('stops', -1, numberOptions);

  const [selectedAlliance, setSelectedAlliance] = useQueryState<string>('alliance');
  const [selectedCurrency, setSelectedCurrency] = useQueryState<string>('currency', 'EUR');
  const [flights, setFlights] = useState<Flight[] | null>(null);

  const [from, setFrom] = useQueryState<Location[]>('from', null, jsonOptions);
  const [to, setTo] = useQueryState<Location[]>('to', null, jsonOptions);

  useEffect(() => initializeIcons(), []);

  const onChangeFrom = (l: Location[]) => setFrom(l);
  const onChangeTo = (l: Location[]) => setTo(l);

  const [error, setError] = useState<string | null>(null);

  const findFlights = () => {
    // @ts-ignore
    sa_event("find flights click");
    if (!from || from.length === 0) {
      return setError("Add atleast one 'From' airport or city.");
    }

    if (!to || to.length === 0) {
      return setError("Add atleast one 'To' airport or city.");
    }

    if (!departureRange || !departureRange.start) { 
      return setError("Please set a departure date.");
    }

    if (returnRange && (returnRange.end || returnRange.start && departureRange.start > (returnRange.end ?? returnRange.start))) { 
      return setError("Please set the departure range to start before the end of the return range.");
    }

    const params = {
      fly_from: (from ?? []).map(l => l.code).join(','),
      fly_to: (to ?? []).map(l => l.code).join(','),
      date_from: formatDate(departureRange.start),
      date_to: formatDate(departureRange.end ?? departureRange.start),
      return_from: formatDate(returnRange?.start),
      return_to: formatDate(returnRange?.end ?? returnRange?.start),
      flight_type: returnRange?.start !== null ? 'round' : 'oneway',
      adults: adults ?? 1,
      curr: selectedCurrency,
    }

    if (stops !== null && stops >= 0) {
      params['max_stopovers'] = stops;
    }

    if (selectedAlliance) {
      params['select_airlines'] = selectedAlliance;
    }

    const headers = {
      apikey: '9nfHUAXA3-gooRVP-TCxjPiIs7R_C4gQ',
    }

    setIsLoading(true);
    setError(null);
    // @ts-ignore
    sa_event("find flights api request");
    axios({
      url: "https://tequila-api.kiwi.com/v2/search",
      params: params,
      headers: headers,
      validateStatus: s => s < 500
    })
      .then(r => {
        if (r.status > 399) {
          setError(r.data.error.slice(39, r.data.error.length - 1));
        } else {
          setFlights(r.data.data)
        }
      })
      .then(_ => setIsLoading(false))
  }

  const copyLink = () => navigator.clipboard.writeText(window.location.href);

  const onRenderLinkPrefix = () => <Icon iconName={"MiniLink"} />
  const onRenderLinkSuffix = () => <PrimaryButton text={"Copy"} onClick={copyLink} />

  return <ThemeProvider theme={theme}>
    {isLoading ? <FullScreenSpinner /> : <><div className={styles.header}>
      <h1><a href="https://stair.nu">Stair</a></h1>
      <p>Travel hacking made easy.</p>
    </div>
    <div className={styles.container}>
      <div className={styles.fieldContainer}>
        <AirportPicker selected={from ?? []} onChange={onChangeFrom} label={"Departure location"} />
        <AirportPicker selected={to ?? []} onChange={onChangeTo} label={"Arrival location"} />
      </div>
      <div className={styles.fieldContainer}>
        <DateRangePicker value={departureRange} onChange={setDepartureRange} placeholder={"Departure period"} />
        <DateRangePicker value={returnRange} onChange={setReturnRange} placeholder={"Return period (optional)"}/>
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
      {error ? <p className={styles.error}>{error}</p> : null}
      <PrimaryButton onClick={_ => findFlights()}>Find flights!</PrimaryButton>
      <TextField readOnly
        value={getHref()} 
        onRenderPrefix={onRenderLinkPrefix} 
        onRenderSuffix={onRenderLinkSuffix}
        styles={{suffix: {padding: 0}}}
      />
    </div>
    <div className={styles.currencySelectContainer}>
      <CurrencySelect value={selectedCurrency} onChange={setSelectedCurrency} />
    </div>
    <FlightExplorer flights={flights} /></>}
    <div className={styles.footer}>
      <p>© <a href="https://github.com/stanvanrooy">Stan van Rooy</a></p>
      <a href="https://peacekeeper.app">Social media scheduler</a>
    </div>
    <BrowserView>
      <a className={styles.analyticsBadge} href="https://simpleanalytics.com/stair.nu?utm_source=stair.nu&utm_content=badge" target="_blank">
        <img src="https://simpleanalyticsbadge.com/stair.nu?counter=false&background=eeeeee" loading="lazy" />
      </a>
    </BrowserView>
  </ThemeProvider>
}

export default App;
