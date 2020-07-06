import React, { Component } from "react";
import Titles from "../molecules/Titles";
import Texts from "../molecules/Texts";

import "../App.css";

class Tweets extends Component {
  render() {
    return (
      <div className="info-item-three">
        <Titles first="últimos" second="tweets" />
        <Texts />
        <hr />
        <Texts />
      </div>
    );
  }
}

export default Tweets;
