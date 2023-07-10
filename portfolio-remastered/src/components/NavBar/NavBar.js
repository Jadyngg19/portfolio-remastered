import "./NavBar.css";
import React, { useState } from 'react';
import {Link} from "react-router-dom";
import {FaBars, FaTimes} from "react-icons/fa";

const NavBar = () => {

const [click, setClick] = useState(false);
const handleClick = () => setClick(!click);

  return (
    <div className="header">
        <Link to="/">
            <h1 className="nav-bar-header">JG's Portfolio</h1>
        </Link>
        <ul className="nav-menu">
            <li>
                <Link to="/">All About Me</Link>
            </li>
            <li>
                <Link to="/Projects">Projects</Link>
            </li>
            <li>
                <Link to="/ContactInfo">Contact</Link>
            </li>
            <li>
                <Link to="/Resume">Resume</Link>
            </li>
        </ul>
        <div className="hamburger-menu" onClick={handleClick}>
            {click ? (
            <FaTimes size={20} style={{color: "D63230" }}/>
            ) : (
            <FaBars size={20} style={{color: "D63230" }}/>
            )}
        </div>
    </div>
  )
}

export default NavBar;