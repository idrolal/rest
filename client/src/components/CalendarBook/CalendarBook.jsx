import React from 'react';
import { useState } from 'react';
import Calendar from "react-calendar"
import "react-calendar/dist/Calendar.css"

function CalendarBook(minDate) {
  const [calenadarValue, onChangeCalendar] = useState(new Date())

  console.log(minDate);

  return (
    <div className='calendar'>
      <Calendar onChange={onChangeCalendar} value={calenadarValue} />
    </div>
  );
}

export default Calendar;
