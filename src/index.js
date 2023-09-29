// Importing React and ReactDOM's createRoot function from react-dom/client
import React from 'react';
import { createRoot } from 'react-dom/client';

// Importing the CSS file for styling
import './index.css';

// Importing the App component
import App from './App';

// Importing HashRouter from react-router-dom
import { HashRouter } from "react-router-dom"

// Getting the container element with the ID "root" from the HTML file
const container = document.getElementById('root');

// Creating a root for the React application using ReactDOM's createRoot function
const root = createRoot(container);

// Rendering the App component wrapped with HashRouter as the root component
// This enables client-side routing with a hash in the URL
root.render(
  <HashRouter>
    <App />
  </HashRouter>
);