// Importing React and CSS file for styling
import React from 'react';
import './index.css';

// Importing components and routes
import Home from './routes/HomePage';
import Projects from './routes/Projects';
import ContactInfo from './routes/ContactInfo';
import Resume from './routes/Resume';
import NavBar from "./components/NavBar";
import Footer from './components/Footer';

// Importing Switch, Route, and HashRouter from react-router-dom
import { Switch, Route, HashRouter } from 'react-router-dom';

// App component
function App() {
  return (
    // Wrapping the entire application with a HashRouter for handling client-side routing with a hash in the URL
    <HashRouter>
      {/* Rendering the NavBar component */}
      <NavBar />

      {/* Switch component renders the first Route that matches the current location */}
      <Switch>
        {/* Route for the Home page */}
        <Route exact path="/" component={Home} />

        {/* Route for the Projects page */}
        <Route path="/Projects" component={Projects} />

        {/* Route for the ContactInfo page */}
        <Route path="/ContactInfo" component={ContactInfo} />

        {/* Route for the Resume page */}
        <Route path="/Resume" component={Resume} />
      </Switch>

      {/* Rendering the Footer component */}
      <Footer />
    </HashRouter>
  );
}

// Exporting the App component to be used as the entry point of the application
export default App;