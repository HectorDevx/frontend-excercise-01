import React, { Component } from "react";
import Menu from "../molecules/Menu";
import "../molecules/Menu.css";

class Header extends Component {
  render() {
    return (
      <header className="header">
        <Menu />
      </header>
    );
  }
}

export default Header;
