import React from "react";
import PropTypes from "prop-types";


function Produce(props) {
  return (
    <React.Fragment>
      <div class="col-3 spacer">
        <p className='display-4'>{props.month}</p>
        <div class="box">
          <div class="inner-box">
            <ul>
              <li>{props.selection}</li>
            </ul>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

Produce.propTypes = {
  month: PropTypes.string,
  selection: PropTypes.array
};
export default Produce;