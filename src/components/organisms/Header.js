import React, { Component } from "react";
import Menu from "../molecules/Menu";
import "../molecules/Menu.css";

class Header extends Component {
  render() {
    return (
      <div className="header">
        <Menu />
      </div>
    );
  }
}

export default Header;
