import React, { Component } from "react";

class Texts extends Component {
  render() {
    return (
      <div>
        <p>
          <strong>{this.props.title}</strong>
        </p>
        <p>{this.props.text}</p>
      </div>
    );
  }
}

export default Texts;
