// Importing the CSS file for styling the WorkCard component
import "./WorkCard.css";

// Importing React
import React from 'react';

// WorkCard component
const WorkCard = (props) => {
  return (
    // Container for the project card with class "project-card"
    <div className="project-card">
      {/* Image for the project logo */}
      <img src={props.imgsrc} alt="Project Logo" />

      {/* Heading for the project title */}
      <h2 className="project-title">{props.title}</h2>

      {/* Container for project details with class "proj-details" */}
      <div className="proj-details">
        {/* Paragraph for the project description */}
        <p>{props.text}</p>

        {/* Container for project buttons with class "proj-buttons" */}
        <div className="proj-buttons">
          {/* Link to view the project with class "button" */}
          <a href={props.view} className="button">View</a>

          {/* Link to view the project's source code with class "button" */}
          <a href={props.source} className="button">Code</a>
        </div>
      </div>
    </div>
  );
};

// Exporting the WorkCard component to be used elsewhere in the application
export default WorkCard;