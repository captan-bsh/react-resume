import React, { Component } from "react";
import "../App.css";

export default class Card extends Component {
  render() {
    return (
        <div className="card">
            <h3>{this.props.title}</h3>
            <br/>
            <img src={this.props.img} alt={this.props.title}/>
        </div>
    );
  }
}
