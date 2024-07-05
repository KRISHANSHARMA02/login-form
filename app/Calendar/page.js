"use client"
import React from 'react';
import { Calendar, momentLocalizer } from 'react-big-calendar';
import 'react-big-calendar/lib/css/react-big-calendar.css';
import moment from 'moment';
import dashboard from '../Dashboard/page';

const localizer = momentLocalizer(moment);

const calendar= () => {
  return (
    <div>
    <dashboard />
    <div className="mt-8 ml-8 w-[75vw]">
      <Calendar
        localizer={localizer}
        startAccessor="start"
        endAccessor="end"
        style={{ height: 500 }}
      />
    </div>
    </div>
  );
}
export default  calendar