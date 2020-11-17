import React from "react";

const monthList = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December"
]

function Months() {
  return (
    <React.Fragment>
      {monthList.map((months, index) =>
        <button className="month-buttons btn-primary" value={index}>{months}</button>
      )}
    </React.Fragment>
  );
}

export default Months;