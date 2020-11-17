import React from "react";
import Months from "./Months";
import ScheduleList from "./ScheduleList";
import ProduceList from "./ProduceList";

function App() {
  return (
    <React.Fragment>
      <div class="container">
        <div class="row">
          <div class="col-xs-1-12">
            
          </div>
          
        </div>
      </div>
      <ScheduleList />
      <Months />
      <ProduceList />
    </React.Fragment>
  );
}

export default App;