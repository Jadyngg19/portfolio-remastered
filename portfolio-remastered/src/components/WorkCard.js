import "./WorkCard.css";

import React from 'react'
import proj1 from "../assets/Project1.jpg";
import { NavLink } from "react-router-dom";

const WorkCard = () => {
  return (
    <div className="work-container">
        <h1 className="project-heading">Projects</h1>
        <div className="project-container">
            <div className="project-card">
                <img src={proj1} alt="Tecnically Social API Logo"/>
                <h2 className="project-title"> Tecnically Social API</h2>
                <div className="proj-details">
                    <p>This is a social network API that allows users to interact with various features such as creating, updating, and deleting users, thoughts, reactions, and friend connections. The API is built using Node.js, Express.js, and MongoDB with Mongoose as the ODM.</p>
                    <div className="proj-buttons">
                        <NavLink to="https://photos.app.goo.gl/JyFSGB6EPSSf5iFi8" className="buttons">View</NavLink>
                        <NavLink to="https://github.com/Jadyngg19/Technically-Social-API" className="buttons">Source</NavLink>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default WorkCard;