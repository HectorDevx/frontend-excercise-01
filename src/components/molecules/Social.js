import React, { Component } from "react";
import "./Social.css";

class SocialItem extends Component {
  render() {
    return (
      <div className="social-list">
        <img src={this.props.icon} alt="Icon" />
        <h5>{this.props.url}</h5>
      </div>
    );
  }
}

export default SocialItem;
