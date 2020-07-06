import React, { Component } from "react";
import Titles from "../molecules/Titles";
import SocialItem from "../molecules/Social";

import "../App.css";

class Tweets extends Component {
  render() {
    return (
      <div className="info-item-three">
        <Titles first="también" second="estoy en" />
        <SocialItem />
        <SocialItem />
      </div>
    );
  }
}

export default Tweets;
