import React from "react";
import PropTypes from "prop-types";

function Produce(props) {
  return (
    <React.Fragment>

      <p className='display-4'>{props.month}</p>
      <ul>
        <li>{props.selection}</li>
      </ul>
    </React.Fragment>
  );
};

Produce.propTypes = {
  month: PropTypes.string,
  selection: PropTypes.array
};
export default Produce;