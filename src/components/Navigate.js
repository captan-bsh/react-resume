/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable no-useless-constructor */
import React, { Component } from "react";
import { Link } from "react-scroll";
import "../App.css";

export default class Navigate extends Component {
  constructor(props) {
    super(props);
    this.state = {
      colorSetPerfix: "set",
      colorSet: 0
    };
  }

  changeColor = async () => {
    if (this.state.colorSet < 4) {
      let a = await document.body.classList.remove(this.state.colorSetPerfix + this.state.colorSet)
      let b = await this.setState({ colorSet: this.state.colorSet + 1 })
      let c = await document.body.classList.add(this.state.colorSetPerfix + this.state.colorSet)
    } else {
      let d = await document.body.classList.remove(this.state.colorSetPerfix + this.state.colorSet)
      let e = this.setState({ colorSet: 0 })
    }
  };

  render() {
    let items = this.props.items.map(el => (
      <Link
        key={el}
        activeClass="active"
        to={el}
        spy={true}
        smooth={true}
        duration={500}
        className={el + "Link"}
      >
        {el}
      </Link>
    ));

    return (
      <nav className="topnav">
        {items}
        <div className="colorChanger">
          <a onClick={this.changeColor}>change color</a>
        </div>
      </nav>
    );
  }
}
