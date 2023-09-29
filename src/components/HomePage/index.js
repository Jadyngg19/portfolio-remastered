// Importing the CSS file for styling
import "./style.css";

// Importing necessary dependencies from React and react-router-dom
import React from "react";
import { Link } from "react-router-dom";

// Importing image assets
import IntroImg from "../../assets/HomePage.jpeg";
import ProfileImg from "../../assets/profilepic.jpg";

// HeroImg component
const HeroImg = () => {
  return (
    // Container for the hero section with class "hero"
    <div className="hero">
      {/* Mask for the hero section with class "mask" */}
      <div className="mask">
        {/* Image element for the introductory image with class "intro-img" */}
        <img className="intro-img" src={IntroImg} alt="IntroImg" />
      </div>

      {/* Container for the content with class "content" */}
      <div className="content">
        {/* Line breaks for spacing */}
        <br />
        <br />
        {/* Heading for the introduction */}
        <h1>Hi, I'm Jadyn</h1>
        {/* Image element for the profile picture with class "profile-img" */}
        <img className="profile-img" src={ProfileImg} alt="ProfileImg" />
        {/* Paragraph for the introduction */}
        <p>
          I am a Junior Web Developer with a passion for coding and creating dynamic websites. I recently completed an
          intensive web development bootcamp program at Rutgers, where I gained expertise in HTML, CSS, JavaScript,
          React, and so much more. My experience has honed my teamwork, problem-solving, and information gathering
          skills, making me an ideal candidate to collaborate on projects. Furthermore, I am fluent in English and
          Spanish, which allows me to possess the ability to connect with diverse individuals and cultures.
        </p>

        {/* Container for the button links */}
        <div>
          {/* Link to the "Projects" page with class "button" */}
          <Link to="/Projects" className="button">Projects</Link>
          {/* Link to the "ContactInfo" page with class "button-light" */}
          <Link to="/ContactInfo" className="button-light">Contact</Link>
        </div>

        {/* Line breaks for spacing */}
        <br />
        <br />
      </div>
    </div>
  );
};

// Exporting the HeroImg component to be used elsewhere in the application
export default HeroImg;