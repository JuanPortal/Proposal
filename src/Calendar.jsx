import React from "react";
import { InlineWidget } from "react-calendly";

const Calendar = () => {
  return (
    <div className="calendar">
      <InlineWidget url="https://calendly.com/juanportalg" />
    </div>
  );
};

export default Calendar;