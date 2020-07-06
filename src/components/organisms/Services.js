import React, { Component } from "react";
import Titles from "../molecules/Titles";
import List from "../molecules/List";

class Services extends Component {
  render() {
    return (
      <div className="info-item-two">
        <Titles first="servicios" second="destacados" />
        <List />
      </div>
    );
  }
}

export default Services;
