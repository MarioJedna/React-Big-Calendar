import "./App.css";
import { Calendar, dateFnsLocalizer } from "react-big-calendar";
import format from "date-fns/format";
import parse from "date-fns/parse";
import startOfWeek from "date-fns/startOfWeek";
import getDay from "date-fns/getDay";
import "react-big-calendar/lib/css/react-big-calendar.css";
import React, { useState } from "react";
import DatePicker from "react-datepicker";
import enUS from "date-fns/locale/en-US";

const locales = {
  "en-US": enUS,
};

const localizer = dateFnsLocalizer({
  format,
  parse,
  startOfWeek,
  getDay,
  locales,
});

const events = [
  {
    title: "big meeting",
    allDay: true,
    start: new Date(2023, 2, 3),
    end: new Date(2023, 2, 4),
  },
  {
    title: "vacation",
    start: new Date(2023, 2, 5),
    end: new Date(2023, 2, 6),
  },
  {
    title: "conference",
    start: new Date(2023, 2, 7),
    end: new Date(2023, 2, 8),
  },
];

function App() {
  return (
    <div className="App">
      <Calendar
        localizer={localizer}
        events={events}
        startAccessor="start"
        endAccessor="end"
        style={{ height: 500 }}
      />
    </div>
  );
}

export default App;
