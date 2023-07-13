import "./WorkCard.css";

import React from 'react';
import { NavLink } from "react-router-dom";

const WorkCard = (props) => {
  return (
            <div className="project-card">
                <img src={props.imgsrc} alt="Project Logo"/>
                <h2 className="project-title">{props.title}</h2>
                <div className="proj-details">
                    <p>{props.text}</p>
                    <div className="proj-buttons">
                        <NavLink to={props.view} className="button">View</NavLink>
                        <NavLink to={props.source} className="button">Code</NavLink>
                    </div>
                </div>
            </div>
  )
}

export default WorkCard;