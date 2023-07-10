import "./HeroImg.css";

import React from "react";

import IntroImg from "../assests/HomePage.jpeg";
import {Link} from "react-router-dom";

const HeroImg = () => {
  return <div className="hero">
    <div className="mask">
    <img className="intro-img" src={IntroImg} alt="IntroImg"/>
    </div>
    <div className="content">
    <p>Hi, I'm Jadyn</p>
    <h1>I am a Junior Web Developer</h1>
    <div>
    <Link to="/Projects" className="button">Projects</Link>
    <Link to="/ContactInfo" className="button-light">Contact</Link>
    </div>
    </div>
  </div>
};

export default HeroImg;