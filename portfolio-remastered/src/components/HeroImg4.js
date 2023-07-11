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
            <ul style={{ marginBottom: '20px' }}>
                    <li>All-Around Skills</li>
                    <li>Customer Service and Assistance</li>
                    <li>Willingness to Lead</li>
                    <li>Information Gathering</li>
                    <li>Willingness to Lead</li>
                    <li>Team Member Training</li>
                    <li>First Aid/CPR</li>
                    <li>Spanish - Bilingual</li>
                </ul>
                <ul style={{ marginBottom: '0' }}>
                    <li>Technical Skills</li>
                    <li>JavaScript</li>
                    <li>CSS</li>
                    <li>HTML</li>
                    <li>GitHub</li>
                    <li>GitLab</li>
                    <li>Bootstrap</li>
                    <li>J.Query</li>
                    <li>MySQL</li>
                    <li>Node.js</li>
                    <li>React</li>
                </ul>
            </p>
        </div>
    </div>
  )
}

export default HeroImg4;