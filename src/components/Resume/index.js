import "./style.css";
import Button from 'react-bootstrap/Button';
import React from 'react';

const HeroImg4 = () => {

  const handleDownloadResume = () => {
    const resumeDownloadLink = 'https://drive.google.com/file/d/1jST9wlWjLMKVmqIHsX_jgZ93SCDvJaWB/view?usp=sharing';
    window.open(resumeDownloadLink);
  };
  

  return (
    <div className="hero-img4">
      <div className="heading">
        <h1>Resume</h1>
      </div>
      <div className="title">
        <div className="card-container">
            <div className="card">
                <h3>All-Around Skills</h3>
                <span className="bar"></span>
                <p>
                  <ul>
                    <li>Customer Service and Assistance</li>
                    <li>Information Gathering</li>
                    <li>Willingness to Lead</li>
                    <li>Team Member Training</li>
                    <li>Spanish - Bilingual</li>
                  </ul>
                </p>
            </div>
            <div className="card">
                <h3>Technical Skills</h3>
                <span className="bar"></span>
                <p>
                  <ul>
                    <li>JavaScript</li>
                    <li>CSS</li>
                    <li>HTML</li>
                    <li>Bootstrap</li>
                    <li>J.Query</li>
                    <li>MySQL and NoSQL w/MongooseDB</li>
                    <li>Node.js</li>
                    <li>React</li>
                  </ul>
                </p>
            </div>
            <div className="card">
                <h3>Education</h3>
                <span className="bar"></span>
                  <p>
                    <ul>
                      <li>- Rutgers Full Stack Developer Bootcamp, New Brunswick, NJ — Certificate February 2023 - August 2023</li>
                      <li>- Bohemia Manor High School, Chesapeake City, MD — High School Diploma November 2015 - June 2019</li>
                    </ul>
                  </p>
            </div>
        </div>
    </div>
    <div className="button-container">
        <Button variant="primary" onClick={handleDownloadResume}>
          Download My Full Resume
        </Button>
      </div>
    </div>
    
  )
}

export default HeroImg4;