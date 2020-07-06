import React, { Component } from "react";
import "./Titles.css";

class Titles extends Component {
  render() {
    return (
      <div className="titles">
        <h2 className="color-red">{this.props.first}</h2>
        <h2 className="color-gray align-right">{this.props.second}</h2>
      </div>
    );
  }
}

export default Titles;
