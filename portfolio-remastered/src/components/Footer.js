import "./Footer.css";

import React from 'react';

import {FaFacebook, FaLinkedin, FaGithub} from "react-icons/fa";

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-container">
        <div className="socials">
    <FaFacebook size={30} style={{color: "#FFBE0B", marginRight: "1rem"}}></FaFacebook>
    <FaLinkedin size={30} style={{color: "#FFBE0B", marginRight: "1rem"}}></FaLinkedin>
    <FaGithub size={30} style={{color: "#FFBE0B", marginRight: "1rem"}}></FaGithub>
        </div>
        </div>  
    </div>
  )
}

export default Footer