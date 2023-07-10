import "./HeroImg2.css";

import React from 'react';

import IntroImg2 from "../assets/Projects.jpg";

const HeroImg2 = () => {
  return (
    <div className="hero">
 <div className="mask">
    <img className="intro-img" src={IntroImg2} alt="IntroImg2"/>
    </div>
        <div className="content">
            <h1>Projects</h1>
            <p>Some of my most recent work</p>
        </div>
    </div>
  )
}

export default HeroImg2;