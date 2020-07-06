import React, { Component } from "react";
import Titles from "../molecules/Titles";
import Button from "../molecules/Button";

import "../App.css";

class About extends Component {
  render() {
    return (
      <div className="info-item-two">
        <Titles first="quien" second="soy" />
        <p>
          Etiam lectus nulla, vestibulum vel luctus eu, ultrice Sit amet arcu.
          In a sem a nibh fringilia blandit. Ut u Metus turpis ultricies.
        </p>
        <Button />
      </div>
    );
  }
}

export default About;
