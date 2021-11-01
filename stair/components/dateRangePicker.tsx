import { useState } from "react";
import { DateRange } from "../models/dateRange";

import DatePicker from "react-datepicker";

export interface IDateRangePickerProps {
  onChange: (d: DateRange) => void;
  placeholder: string;
}

export const DateRangePicker = (props: IDateRangePickerProps) => {
  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);
  const onChange = (dates) => {
    const [start, end] = dates;
    setStartDate(start);
    setEndDate(end);
    props.onChange({start: start, end: end});
  }

  return <div>
    <DatePicker
        selected={startDate}
      onChange={onChange}
      startDate={startDate}
      endDate={endDate}
      selectsRange
      placeholderText={props.placeholder}
    />
  </div>
}
