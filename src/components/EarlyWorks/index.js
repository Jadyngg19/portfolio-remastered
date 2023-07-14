import "./style.css"

import React from 'react'
import { NavLink } from "react-router-dom";

const ExtraProjs = () => {
  return (
    <div className="title">
        <div className="card-container">
            <div className="card">
                <h3>- Early Works -</h3>
                <span className="bar"></span>
                <p className="paragraph">Weather Forecast</p>
                <p>- Five-Day Forecast -</p>
                <p>- Allows you to see your past searches -</p>
                <p>- Shows the Temp, Wind, and Hunidity -</p>
                <NavLink to="https://github.com/Jadyngg19/What-Is-The-Weather-Like" className="button">View Source</NavLink>
            </div>
            <div className="card">
                <h3>- Early Works -</h3>
                <span className="bar"></span>
                <p className="paragraph">Create Me A README</p>
                <p>- Back-end project -</p>
                <p>- Includes prompts to provide information -</p>
                <p>- Allows you to put a license logo -</p>
                <NavLink to="https://github.com/Jadyngg19/Create-Me-A-README.md-File" className="button">View Source</NavLink>
            </div>
            <div className="card">
                <h3>- Early Works -</h3>
                <span className="bar"></span>
                <p className="paragraph">Password Generator</p>
                <p>- Includes symbols and numbers -</p>
                <p>- Prompts response to customize password -</p>
                <p>- Has a generate button -</p>
                <NavLink to="https://github.com/Jadyngg19/PasswordGenerator_2" className="button">View Source</NavLink>
            </div>
        </div>
    </div>
  )
}

export default ExtraProjs;