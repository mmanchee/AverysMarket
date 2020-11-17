import React from "react";
import Schedule from "./Schedule";

const marketSchedule = [  
  {  
    day: "Sunday",
    location: "Lents International",
    hours: "9:00am - 2:00pm",
    booth: "4A"
  },
  {  
    day: "Monday",
    location: "Pioneer Courthouse Square",
    hours: "10:00am - 2:00pm",
    booth: "7C"
  },
  {  
    day: "Tuesday",
    location: "Hillsboro",
    hours: "5:00pm - 8:30pm",
    booth: "1F"
  },
  {  
    day: "Wednesday",
    location: "Shemanski Park",
    hours: "10:00am - 2:00pm",
    booth: "3E"
  },
  {  
    day: "Thursday",
    location: "Northwest Portland",
    hours: "2:00pm - 6:00pm",
    booth: "6D"
  },
  {
    day: "Friday",
    location: "None",
    hours: "Closed",
    booth: "-"
  },
  {  
    day: "Saturday",
    location: "Beaverton",
    hours: "10:00am - 1:30pm",
    booth: "9G"
  }
];

  function ScheduleList() {
    return (
      <React.Fragment>
        {marketSchedule.map((site, index) =>
          <Schedule day={site.day}
          location={site.location}
          hours={site.hours}
          booth={site.booth}
          key={index} />
        )}
      </React.Fragment>
    );
  }

  export default ScheduleList;