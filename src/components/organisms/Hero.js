import React, { Component } from "react";

class Hero extends Component {
  render() {
    return (
      <div className="Hero">
        <div className="Hero__Container">
          <img src="" alt="Logo" />
          <h3 className="color-red">Mira mis últimos diseños y projectos.</h3>
          <h3 className="color-red">
            Oh, por cierto, <span className="color-gray">¡Bienvenido!</span>
          </h3>
        </div>
      </div>
    );
  }
}

export default Hero;
