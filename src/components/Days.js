import React from "react";

const dayList = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday"
]

function Days() {
  return (
    <React.Fragment>
      {dayList.map((days, index) =>
        <button className="day-buttons btn-primary" value={index}>{days}</button>
      )}
    </React.Fragment>
  );
}

export default Days;