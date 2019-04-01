import React, { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-scroll";
import "../App.css";

export default class SecondSection extends Component {
  render() {
    return (
      <section className="section second" name={this.props.name}>
        <h2>{this.props.title}</h2>
        <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
        </p>
        <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Viverra nam libero justo laoreet sit. Feugiat nibh sed pulvinar proin gravida hendrerit. Diam sit amet nisl suscipit. Id nibh tortor id aliquet. Laoreet non curabitur gravida arcu ac tortor. Eget est lorem ipsum dolor sit amet. Justo laoreet sit amet cursus sit amet dictum sit. Pellentesque habitant morbi tristique senectus et. Malesuada pellentesque elit eget gravida cum. Volutpat maecenas volutpat blandit aliquam etiam erat velit. Elementum sagittis vitae et leo duis ut diam.
        </p>
        <Link activeClass="active" to="skils" spy={true} smooth={true} duration={500} >
          <FontAwesomeIcon className="goToNextSection" icon="chevron-down" size="lg" />
        </Link>
      </section>
    );
  }
}
