import React from "react";
import PropTypes from "prop-types";


function Schedule(props) {
  return (
    <React.Fragment>
      <di class="col-3 spacer">
        <h3> {props.day}</h3>
        <p>Location: {props.location}</p>
        <p>Hours: {props.hours}</p>
        <p>Booth Number:{props.booth}</p>
      </di>
    </React.Fragment>
  );
}

Schedule.propTypes = {
  day: PropTypes.string,
  location: PropTypes.string,
  hours: PropTypes.string,
  booth: PropTypes.string
};

export default Schedule;