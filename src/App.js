import React, { Component } from "react";
import SnowStorm from 'react-snowstorm';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faTwitter , faGoogle , faLinkedin , faFacebook , faInstagram , faGithub } from "@fortawesome/free-brands-svg-icons";
import { faChevronDown , faChevronUp } from "@fortawesome/free-solid-svg-icons";
import FirstSection from "./components/FirstSection";
import SecondSection from "./components/SecondSection";
import ThirdSection from "./components/ThirdSection";
import Navigate from "./components/Navigate";
import data from "../src/data.json";
import "normalize.css";
import "./App.css";

library.add(faTwitter, faGoogle, faLinkedin, faFacebook, faInstagram, faGithub, faChevronDown, faChevronUp);

export default class App extends Component {
  render() {
    return (
      <div className="app">
        <SnowStorm animationInterval="30" snowStick="true" flakesMax="400" flakesMaxActive="128" />
        <Navigate items={data.menu} />
        <FirstSection title={data.sections[0].title} name={data.sections[0].key} />
        <SecondSection title={data.sections[1].title} name={data.sections[1].key}/>
        <ThirdSection title={data.sections[2].title} name={data.sections[2].key}/>
      </div>
    );
  }
}
