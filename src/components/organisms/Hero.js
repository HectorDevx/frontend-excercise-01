import React, { Component } from "react";
import Logo from "../../images/logo.png";
import "./Hero.css";

class Hero extends Component {
  render() {
    return (
      <section className="hero">
        <div className="hero__container">
          <img src={Logo} alt="Logo" />
          <h3 className="color-red">Mira mis últimos diseños y projectos.</h3>
          <h3 className="color-red">
            Oh, por cierto, <span className="color-gray">¡Bienvenido!</span>
          </h3>
        </div>
      </section>
    );
  }
}

export default Hero;
