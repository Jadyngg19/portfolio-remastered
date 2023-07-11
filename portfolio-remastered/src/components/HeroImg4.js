import "./HeroImg4.css";

import React from 'react';

import IntroImg4 from "../assets/Resume.jpg";

const HeroImg4 = () => {
  return (
    <div className="hero">
 <div className="mask">
    <img className="intro-img" src={IntroImg4} alt="IntroImg4"/>
    </div>
        <div className="content">
            <h1>Resume</h1>
            <p>
                <ul>
                    <li>
                        
                    </li>
                </ul>
            </p>
        </div>
    </div>
  )
}

export default HeroImg4;