import "./Footer.css";

import React from 'react';

import {FaFacebook, FaLinkedin, FaGithub} from "react-icons/fa";

const Footer = () => {

    const handleFacebookClick = () => {
        window.open('https://www.facebook.com/jadyn.gg19/', '');
      };
    
      const handleLinkedInClick = () => {
        window.open('https://www.linkedin.com/in/jadyn-gomez/', '');
      };
    
      const handleGithubClick = () => {
        window.open('https://github.com/Jadyngg19', '');
      };

      return (
        <footer className="footer">
          <div className="socials">
            <FaFacebook
              size={30}
              style={{ color: "#FFBE0B", marginRight: "1rem", cursor: "pointer" }}
              onClick={handleFacebookClick}
            />
            <FaLinkedin
              size={30}
              style={{ color: "#FFBE0B", marginRight: "1rem", cursor: "pointer" }}
              onClick={handleLinkedInClick}
            />
            <FaGithub
              size={30}
              style={{ color: "#FFBE0B", marginRight: "1rem", cursor: "pointer" }}
              onClick={handleGithubClick}
            />
          </div>
        </footer>
      );
    };
    
    export default Footer;