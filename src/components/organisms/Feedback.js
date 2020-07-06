import React, { Component } from "react";
import Titles from "../molecules/Titles";
import Texts from "../molecules/Texts";

import "../App.css";

class Feedback extends Component {
  render() {
    return (
      <div className="info-item-three">
        <Titles first="feedback" second="de clientes" />
        <Texts />
        <hr />
        <Texts />
      </div>
    );
  }
}

export default Feedback;
