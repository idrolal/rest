import React from 'react';
import { useState } from 'react';
import Calendar from "react-calendar"
import "react-calendar/dist/Calendar.css"

function CalendarBook(minDate) {
  const [calenadarValue, onChangeCalendar] = useState(new Date())

  return (
    <div className='calendar'>
      {/* <Calendar onClick={console.log(123)} value={calenadarValue} /> */}
      <input type='date'>VREMYA</input>
    </div>
  );
}

export default Calendar;
