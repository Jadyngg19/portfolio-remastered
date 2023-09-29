// Importing the CSS file for styling
import "./style.css";
import React from 'react';

// ExtraProjs component
const ExtraProjs = () => {
  return (
    // Container for the component's content with class "title"
    <div className="title">
      {/* Container for the card elements with class "card-container" */}
      <div className="card-container">
        {/* Card 1 */}
        <div className="card">
          {/* Heading for Card 1 */}
          <h3>- Early Works -</h3>
          {/* Horizontal bar */}
          <span className="bar"></span>
          {/* Paragraph for Card 1 */}
          <p className="paragraph">Weather Forecast</p>
          <p>- Five-Day Forecast -</p>
          <p>- Allows you to see your past searches -</p>
          <p>- Shows the Temp, Wind, and Humidity -</p>
          {/* Link to view the source code for Card 1 */}
          <a href="https://github.com/Jadyngg19/What-Is-The-Weather-Like" className="button">View Source</a>
        </div>

        {/* Card 2 */}
        <div className="card">
          {/* Heading for Card 2 */}
          <h3>- Early Works -</h3>
          {/* Horizontal bar */}
          <span className="bar"></span>
          {/* Paragraph for Card 2 */}
          <p className="paragraph">Create Me A README</p>
          <p>- Back-end project -</p>
          <p>- Includes prompts to provide information -</p>
          <p>- Allows you to put a license logo -</p>
          {/* Link to view the source code for Card 2 */}
          <a href="https://github.com/Jadyngg19/Create-Me-A-README.md-File" className="button">View Source</a>
        </div>

        {/* Card 3 */}
        <div className="card">
          {/* Heading for Card 3 */}
          <h3>- Early Works -</h3>
          {/* Horizontal bar */}
          <span className="bar"></span>
          {/* Paragraph for Card 3 */}
          <p className="paragraph">Password Generator</p>
          <p>- Includes symbols and numbers -</p>
          <p>- Prompts response to customize password -</p>
          <p>- Has a generate button -</p>
          {/* Link to view the source code for Card 3 */}
          <a href="https://github.com/Jadyngg19/PasswordGenerator_2" className="button">View Source</a>
        </div>
      </div>
    </div>
  );
};

// Exporting the ExtraProjs component to be used elsewhere in the application
export default ExtraProjs;