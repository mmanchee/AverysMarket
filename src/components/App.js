import React from "react";
import Months from "./Months";
import ScheduleList from "./ScheduleList";
import ProduceList from "./ProduceList";
import Days from "./Days";
import { render } from "@testing-library/react";

class App extends Component {
  constructor() {
    super();
    this.state={
      name: "React",
      showHideProductList1:false,
      showHideProductLList2:false,
      showHideProductList3:false
    };
    this.hideComponent=this.hideComponent.bind(this);
  }
  hideComponent(name){
    console.log(name);
    switch(name) {
case "showHideProductList1":
      this.setState({showHideProductList1: !this.state.showHideProductList1});
      break;
      default:
        null;
    }
  }

  render() {
    const { showHideProductList1 } = this.state;
    return (
      <React.Fragment>
        <div className="container">
          <div className="row">
            <div className="col-6">
              <Days />
              <ScheduleList />
            </div>
            <div className="col-6">
              <Months />
            </div>
          </div>
          <div className='row'>
            <ProduceList />
            <button onClick={() => this.hideComponent("showHideProductList1")}/>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default App;