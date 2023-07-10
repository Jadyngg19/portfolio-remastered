import "./HeroImg.css";

import React from "react";

import IntroImg from "../assests/HomePage.jpeg"

const HeroImg = () => {
  return <div className="hero">
    <div className="mask">
    <img class="Intro-Img" src={IntroImg} alt="IntroImg"/>
    </div>
    <div className="content">
    <p>I am a Junior Web Developer with a passion for coding and creating dynamic websites</p>
    </div>
  </div>;
};

export default HeroImg;