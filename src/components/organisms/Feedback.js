import React, { Component } from "react";
import Titles from "../molecules/Titles";
import Texts from "../molecules/Texts";

import "../App.css";

class Feedback extends Component {
  render() {
    return (
      <section className="info-item-three">
        <Titles first="feedback" second="de clientes" />
        <Texts
          title="Sra. Lorem Ipsum"
          text="Lorem ipsum dolor sit amet, muy buen trabajo!!"
        />
        <hr />
        <Texts
          title="Sra. Lorem Ipsum"
          text="Lorem ipsum dolor sit amet, el mejor diseñador web del mundo!!"
        />
      </section>
    );
  }
}

export default Feedback;
