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
  let key = l.code;
  if (l.type === 'city')
    key = 'city:' + key;
  if (l.type === 'region') 
    key = l.id;
  return {
    name: l.name,
    key: key,
  };
}

const onResolveSuggestions = (filter: string, selected?: ITag[]): PromiseLike<ITag[]> | ITag[] => {
  selected = selected ?? [];
  if (filter.length === 0) {
    return [];
  }

  const url = `https://tequila-api.kiwi.com/locations/query?location_types=city&location_types=region`
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
  console.log(selectedKeys);

  // @ts-ignore
  sa_event('location_api_request');
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
  const pkt = props.key.toString();
  const isAirport = !(pkt.includes('city') || pkt.includes('region'));

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
    }, 
    '& div.ms-BasePicker-text': {
      background: '#eee',
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
      id: i.key.includes('region') ? i.key.replace('region:', '') : null,
      type: !i.key.includes('city') ? (i.key.includes('region') ? 'region' : 'airport') : 'city'
    }));
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
