import React from "react";
import ToggleControl from "./ToggleControl";
import Header from "./Header"

function App() {
  return (
    <React.Fragment>
      <div className="fluid-container">
        <Header />
        <ToggleControl />
      </div>
      <hr />
    </React.Fragment>
  );
}

export default App;