import React, { Component } from "react";
import Titles from "../molecules/Titles";
import Texts from "../molecules/Texts";

import "../App.css";

class Tweets extends Component {
  render() {
    return (
      <section className="info-item-three">
        <Titles first="últimos" second="tweets" />
        <Texts
          title="5:13 PM Sep 7 desde TweetDeck"
          text="RT 1stwebdesigner: Mira mi último diseño http://bit.ly/asdfg"
        />
        <hr />
        <Texts
          title="5:13 PM Sep 7 desde TweetDeck"
          text="RT 1stwebdesigner: Mira mi último diseño http://bit.ly/asdfg"
        />
      </section>
    );
  }
}

export default Tweets;
