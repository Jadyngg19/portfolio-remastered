import "./HeroImg3.css";

import React from 'react';

import IntroImg3 from "../assets/Contact.jpg";

const HeroImg3 = () => {
  return (
    <div className="hero">
 <div className="mask">
    <img className="intro-img" src={IntroImg3} alt="IntroImg3"/>
    </div>
        <div className="content">
            <h1>Contact</h1>
            <p>Feel free to chat with me!</p>
        </div>
    </div>
  )
}

export default HeroImg3;