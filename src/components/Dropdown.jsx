import React, { Component } from "react";
import "./Dropdown.css";

class Dropdown extends Component {
  state = { optionList: [], open: false };

  getRenderedOptions = () => {
    return this.props.options.map((option) => {
      return (
        <div
          className="dropdown-item"
          key={option.name}
          onClick={() => this.props.onSelectedChange(option)}
        >
          {option.name}
        </div>
      );
    });
  };

  render() {
    return (
      <div className="ui form">
        <div className="field">
          <label className="label">{this.props.label}</label>
          <div
            onClick={() => this.setState({ open: !this.state.open })}
            className={`ui selection dropdown ${
              this.state.open ? "visible active" : ""
            }`}
          >
            <i className="dropdown icon"></i>
            <div className="text">
              {this.props.selectedArea === null
                ? "Select one"
                : this.props.selectedArea.name}
            </div>
            <div
              className={`menu ${this.state.open ? "visible transition" : ""}`}
            >
              {this.getRenderedOptions()}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Dropdown;
