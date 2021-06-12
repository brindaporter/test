import React, { Component } from "react";
import Dropdown from "./Dropdown";
import CityDetail from "./CityDetail";
import axios from "axios";

class CityCompare extends Component {
  state = { options: [], selectedArea: null, areaDetails: null };

  componentDidMount() {
    this.getOptionList();
  }

  onSelectedChange = async (option) => {
    this.setState({ selectedArea: option });
    const cityDetailResponse = await axios.get(option.href + "scores");
    this.setState({ areaDetails: cityDetailResponse.data });
    console.log(this.state.areaDetails);
  };

  getOptionList = async () => {
    const optionList = await axios.get(
      "https://api.teleport.org/api/continents/geonames%3ANA/urban_areas/"
    );
    this.setState({ options: optionList.data._links["ua:items"] });
  };

  render() {
    return (
      <div>
        <Dropdown
          label="Select an area"
          options={this.state.options}
          selectedArea={this.state.selectedArea}
          onSelectedChange={this.onSelectedChange}
        />
        <br />
        <CityDetail
          selectedCity={this.state.selectedArea}
          cityDetail={this.state.areaDetails}
        />
      </div>
    );
  }
}

export default CityCompare;
