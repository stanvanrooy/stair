import { Airport } from "../models/airport";
import { TagPicker, ITag, Label } from "@fluentui/react";
import { useMemo } from "react";
import axios from "axios";
import { styles } from "./airportPickeer.module.css";


export interface IAirportPickerProps {
  selected: Airport[];
  onChange: (a: Airport[]) => void;
  label: string;
}

const onResolveSuggestions = (filter: string, _: any): PromiseLike<ITag[]> => {
  const url = `https://tequila-api.kiwi.com/locations/query`
  const params = {
    limit: 5,
    sort: 'name',
    term: filter,
    location_types: 'airport'
  }
  const headers = {
    apikey: '9nfHUAXA3-gooRVP-TCxjPiIs7R_C4gQ',
  }

  return axios({
    url: url,
    headers: headers,
    params: params,
  }).then(r => r.data.locations.map(l => ({
    name: l.name,
    key: l.type === 'city' ? l.name : l.code
  })));
}

export const AirportPicker = (props: IAirportPickerProps) => {
  const selectedItems = useMemo(() => props.selected.map(a => 
    ({name: a.name, key: a.iata ?? a.city})
    ), [props.selected]);

  return <div className={styles.container}>
    <Label>{props.label}</Label>
    <TagPicker 
      selectedItems={selectedItems}
      onResolveSuggestions={onResolveSuggestions}
    />
  </div>
}

export default AirportPicker;