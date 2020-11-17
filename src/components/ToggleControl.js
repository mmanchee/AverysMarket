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
    if (this.state.fromVisibleOnPage) {
      currentVisibleState = <ProduceList />
      buttonText = "Schedule";

    } else {
      currentlyVisibleState = <ScheduleList />
      buttonText = "Produce";
    }
    return (
      <React.Fragment>
        {currentlyVisibleState}
        <button onClick={this.handleClick}>{buttonText}</button>
      </React.Fragment>
    );
  }
}

export default ToggleControl;