import React from "react";
import ProduceList from "./ProduceList";
import ScheduleList from "./ScheduleList";

class ToggleControl extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      formVisibleOnPage: false
    };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick = () => {
    this.setState(prevState => ({
      formVisibleOnPage: !prevState.formVisibleOnPage
    }));
  }
   render() {
    let currentlyVisibleState = null;
    let buttonText = null;
    if (this.state.formVisibleOnPage) {
      currentlyVisibleState = <div class="row"><ProduceList /></div>
      buttonText = "Schedule";

    } else {
      currentlyVisibleState = <div class="row"><ScheduleList /></div>
      buttonText = "Produce";
    }
    return (
      <React.Fragment>
        <button className='btn btn-success' onClick={this.handleClick}>{buttonText}</button>
        {currentlyVisibleState}
      </React.Fragment>
    );
  }
}

export default ToggleControl;