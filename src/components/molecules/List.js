import React, { Component } from "react";
import { FaCheckCircle } from "react-icons/fa";
import "./Icons.css";

class List extends Component {
  render() {
    return (
      <div>
        <ul>
          <li>
            <FaCheckCircle className="icon" />
            Lorem Ipsum servicio destacado
          </li>
          <li>
            <FaCheckCircle className="icon" />
            Otro servicio que debemos destacar
          </li>
          <li>
            <FaCheckCircle className="icon" />
            Aquí va otro servicio
          </li>
        </ul>
      </div>
    );
  }
}

export default List;
