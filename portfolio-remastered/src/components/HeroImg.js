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
    <h1>Hi, I'm Jadyn</h1>
    <p> 
      I am a Junior Web Developer with a passion for coding and creating dynamic websites. I recently completed an intensive web development bootcamp program at Rutgers, where I gained expertise in HTML, CSS, JavaScript, React, and so much more. My experience has honed my teamwork, problem-solving, and information gathering skills, making me an ideal candidate to collaborate on projects. Furthermore, I am fluent in English and Spanish, which allows me to possess the ability to connect with diverse individuals and cultures.
    </p>
    <div>
    <Link to="/Projects" className="button">Projects</Link>
    <Link to="/ContactInfo" className="button-light">Contact</Link>
    </div>
    </div>
  </div>
};

export default HeroImg;