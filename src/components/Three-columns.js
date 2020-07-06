import React, { Component } from "react";
import Tweets from "./organisms/Tweets";
import Feedback from "./organisms/Feedback";
import Social from "./organisms/Social";

import "./App.css";

class ThreeColumns extends Component {
  render() {
    return (
      <div className="info-container">
        <Tweets />
        <Feedback />
        <Social />
      </div>
    );
  }
}

export default ThreeColumns;
