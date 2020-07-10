import React, { Component } from "react";
import Menu from "../molecules/Menu";

import "./Footer.css";

class Footer extends Component {
  render() {
    return (
      <footer className="footer">
        <Menu />
        <p>
          Copyright 2010 -
          <span className="color-red"> Gonzalo Martín Elola</span> - Todos los
          derechos reservados
        </p>
      </footer>
    );
  }
}

export default Footer;
