import React, { Component } from "react";
import Img1 from "../images/img01.png";
import Img2 from "../images/img02.png";
import Img3 from "../images/img03.png";

import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

import "./Images.css";

class Images extends Component {
  render() {
    return (
      <section className="images">
        <div className="images__container">
          <FaChevronLeft className="arrows" />
          <img className="img-secondary" src={Img1} alt="Imagen 01" />
          <img className="img-principal" src={Img3} alt="Imagen 02" />
          <img className="img-secondary" src={Img2} alt="Imagen 03" />
          <FaChevronRight className="arrows" />
        </div>
      </section>
    );
  }
}

export default Images;
