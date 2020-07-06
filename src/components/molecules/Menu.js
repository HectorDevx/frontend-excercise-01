import React, { Component } from "react";
import "./Menu.css";

class Menu extends Component {
  render() {
    return (
      <ul className="menu">
        <li>inicio</li>
        <li>acerca</li>
        <li>portfolio</li>
        <li>contacto</li>
      </ul>
    );
  }
}

export default Menu;
