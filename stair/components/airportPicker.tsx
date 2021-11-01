import { TagPicker, ITag, Icon, IBasePickerStyles } from "@fluentui/react";
import { useMemo } from "react";
import axios from "axios";
import { Location } from "../models/location";
import styles from "./airportPicker.module.css";


export interface IAirportPickerProps {
  selected: Location[];
  onChange: (a: Location[]) => void;
  label: string;
}

const locationToTag = (l: Location): ITag => {
  return {
    name: l.name,
    key: l.type === 'city' ? `city:${l.code}` : l.code,
  };
}

const onResolveSuggestions = (filter: string, selected?: ITag[]): PromiseLike<ITag[]> | ITag[] => {
  selected = selected ?? [];
  if (filter.length === 0) {
    return [];
  }

  const url = `https://tequila-api.kiwi.com/locations/query?location_types=city`
  const params = {
    limit: 5,
    sort: 'name',
    term: filter,
    location_types: 'airport'
  }
  const headers = {
    apikey: '9nfHUAXA3-gooRVP-TCxjPiIs7R_C4gQ',
  }

  const selectedKeys = selected.map(s => s.key);

  return axios({
    url: url,
    headers: headers,
    params: params,
  }).then(
      r => r.data.locations
      .map(locationToTag)
      .filter(l => !selectedKeys.includes(l.key))
    );
}

const onRenderSuggestionsItem = (props: ITag, _: any) => {
  const isAirport = !props.key.toString().includes('city');

  return <div className={`ms-TagItem-TextOverflow ${styles.suggestionItem}`}>
    <Icon className={styles.icon} iconName={isAirport ? 'AirplaneSolid' : 'CityNext'} /> 
    {props.name} {isAirport ? `(${props.key})` : null}
  </div>
}

const tagPickerStyles = {
  root: {
    '& div.ms-TagItem': {
      background: 'unset',
    },
    '& div.ms-TagItem:focus-within': {
      color: 'initial'
    },
    '& button.ms-TagItem-close:active': {
      background: 'initial',
      color: 'initial'
    },
    '& button.ms-TagItem-close:hover': {
      background: 'initial',
      color: 'initial'
    }
  },
  itemsWrapper: {
    background: '#eee'
  },
  input: {
    background: '#eee'
  }
}

export const AirportPicker = (props: IAirportPickerProps) => {
  const selectedItems = useMemo(() => props.selected.map(locationToTag), [props.selected]);
  const placeholder = useMemo(() => props.selected.length === 0 ? props.label : null, [props.selected]);

  const onChange = (items?: any[]) => {
    if (items === null) {
      return;
    }
    const airports = items.map(i => ({
      name: i.name, 
      code: i.key, 
      type: i.key.includes('city') ? 'city' : 'airport'}
    ));
    props.onChange(airports);
  };

  return <div>
    <TagPicker 
      selectedItems={selectedItems}
      onResolveSuggestions={onResolveSuggestions}
      inputProps={{
        placeholder: placeholder
      }}
      onChange={onChange}
      onRenderSuggestionsItem={onRenderSuggestionsItem}
      styles={tagPickerStyles}
    />
  </div>
}
