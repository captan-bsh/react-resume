import React, { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-scroll";
import data from "../data.json";
import "../App.css";

export default class FirstSection extends Component {
  constructor(props) {
    super(props);
    this.makeIconName = this.makeIconName.bind(this);
  }

  makeIconName(el) {
    return "fa" + el.charAt(0).toUpperCase() + el.slice(1);
  }

  render() {
    return (
      <section className="section first" name={this.props.name}>
        <h1>{this.props.title}</h1>
        <h3>{data.subtitle}</h3>
        <div>
          {Object.keys(data.socialLinks).map(el => {
            return (
              <a href={data.socialLinks[el]} target="_blank" rel="noopener noreferrer" key={el+1}>
                <FontAwesomeIcon className="socialIcon" icon={["fab", `${el}`]} size="lg" key={el} />
              </a>
            );
          })}
        </div>
        <Link activeClass="active" to="about" spy={true} smooth={true} duration={500} >
          <FontAwesomeIcon className="goToNextSection" icon="chevron-down" size="lg" />
        </Link>
      </section>
    );
  }
}
