import React, { Component } from "react";
import About from "./organisms/About";
import Services from "./organisms/Services";

import "./App.css";

class TwoColumns extends Component {
  render() {
    return (
      <div className="info-container">
        <About />
        <Services />
      </div>
    );
  }
}

export default TwoColumns;
