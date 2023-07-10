import "./HeroImg2.css";

import React from 'react';

import IntroImg2 from "../assets/Projects.jpg";

const HeroImg2 = () => {
  return (
    <div className="hero">
            <img className="mask" src={IntroImg2} alt="IntroImg2"/>
        <div className="content">
            <h1>Projects</h1>
            <p>Some of my most recent work</p>
        </div>
    </div>
  )
}

export default HeroImg2;