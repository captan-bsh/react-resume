/* eslint-disable no-unused-expressions */
import React, { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-scroll";
import data from "../data.json"
import Card from "./card";
import "../App.css";

export default class ThirdSection extends Component {
  render() {
    return (
      <section className="section third" name={this.props.name}>
        <h2>{this.props.title}</h2>
        <br/>
        <div>
          {
            data.cards.map(el => <Card title={el.title} img={el.image} key={el.title}/>)
          }
        </div>

        <Link activeClass="active" to="index" spy={true} smooth={true} duration={500} >
          <div className="goToNextSection" >
            <FontAwesomeIcon icon="chevron-up" size="lg" />
            <br/>
            <small>To Top</small>
          </div>
        </Link>
      </section>
    );
  }
}
