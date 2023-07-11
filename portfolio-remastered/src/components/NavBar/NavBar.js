import "./NavBar.css";
import React, { useState } from 'react';
import {Link} from "react-router-dom";
import {FaBars, FaTimes} from "react-icons/fa";

const NavBar = () => {

const [click, setClick] = useState(false);
const handleClick = () => setClick(!click);

const [color, setColor] = useState(false);
const changeColor = () =>{
    if (window.scrollY >=100){
        setColor(true);
    }
    else{
        setColor(false);
    }
};

window.addEventListener("scroll", changeColor);

  return (
    <div className={color ? "header header-bg": "header"}>
        <Link to="/">
            <h1 className="nav-bar-header">JG's Portfolio</h1>
        </Link>
        <ul className={click ? "nav-menu active" : "nav-menu"}>
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
            <FaTimes size={20} style={{color: "#FF006E" }}/>
            ) : (
            <FaBars size={20} style={{color: "#FF006E" }}/>
            )}
        </div>
    </div>
  )
}

export default NavBar;