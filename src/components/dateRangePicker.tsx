import { DateRange } from "../models/dateRange";

import DatePicker from "react-datepicker";

export interface IDateRangePickerProps {
  onChange: (d: DateRange) => void;
  value?: DateRange;
  placeholder: string;
}

export const DateRangePicker = (props: IDateRangePickerProps) => {
  const onChange = (dates) => {
    const [start, end] = dates;
    props.onChange({start: start, end: end});
  }

  return <div>
    <DatePicker
      dateFormat={"yyyy-MM-dd"}
      selected={props.value?.start}
      onChange={onChange}
      startDate={props.value?.start}
      endDate={props.value?.end}
      selectsRange
      isClearable
      placeholderText={props.placeholder}
    />
  </div>
}
