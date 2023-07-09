import "./NavBar.css"
import React from 'react'
import {Link} from "react-router-dom"

const NavBar = () => {
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
    </div>
  )
}

export default NavBar;