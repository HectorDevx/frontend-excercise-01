import React, { Component } from "react";
import { FaArrowCircleRight } from "react-icons/fa";
import "./Button.css";
import "./Icons.css";

class Button extends Component {
  render() {
    return (
      <button className="btn">
        <span>leer más</span>
        <FaArrowCircleRight className="icon" />
      </button>
    );
  }
}

export default Button;
