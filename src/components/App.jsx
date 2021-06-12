import React, { Component } from "react";
import CityCompare from "./CityCompare";

class App extends Component {
  render() {
    return (
      <div class="ui container">
        <div className="ui grid">
          <div className="eight wide column">
            <CityCompare />
          </div>
          <div className="eight wide column">
            <CityCompare />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
