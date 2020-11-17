import React from "react";
import ScheduleList from "./ScheduleList";
import ProduceList from "./ProduceList";
import ToggleControl from "./ToggleControl";

function App() {
  return (
    <React.Fragment>
      <div className="container">
        <ToggleControl />
      </div>
    </React.Fragment>
  );
}

export default App;