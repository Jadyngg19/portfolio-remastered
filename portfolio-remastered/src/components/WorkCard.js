import "./WorkCard.css";
import Project1 from "../assets/Project1.jpg";
import { NavLink } from "react-router-dom";

import React from 'react'

const WorkCard = () => {
  return (
    <div className="work-container">
        <h1 className="project-heding">Projects</h1>
        <div className="project-container">
            <div className="project-card">
                <img src={Project1} alt="Project 1 Image"/>
                <h2 className="project-title">Technically Social API</h2>
                <div className="proj-details">
                    <p>This is a social network API that allows users to interact with various features such as creating, updating, and deleting users, thoughts, reactions, and friend connections. The API is built using Node.js, Express.js, and MongoDB with Mongoose as the ODM</p>
                    <div className="projs-buttons">
                        <NavLink to="https://photos.app.goo.gl/JtLwb8Qe3NpuGZJz6" className="buttons">View</NavLink>
                        <NavLink to="https://github.com/Jadyngg19/Technically-Social-API" className="buttons">Source</NavLink>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default WorkCard;