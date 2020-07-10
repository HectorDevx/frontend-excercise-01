import React, { Component } from "react";
import Titles from "../molecules/Titles";
import List from "../molecules/List";

class Services extends Component {
  render() {
    return (
      <section className="info-item-two">
        <Titles first="servicios" second="destacados" />
        <List />
      </section>
    );
  }
}

export default Services;
