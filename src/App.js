import React from 'react';
import './index.css';
import Home from './routes/HomePage';
import Projects from './routes/Projects';
import ContactInfo from './routes/ContactInfo';
import Resume from './routes/Resume';
import { Switch, Route, HashRouter } from 'react-router-dom';
import NavBar from "./components/NavBar"; 
import Footer from './components/Footer';

function App() {
  return (
    <HashRouter> 
      <NavBar />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/Projects" component={Projects} />
          <Route path="/ContactInfo" component={ContactInfo} />
          <Route path="/Resume" component={Resume} />
        </Switch>
      <Footer /> 
    </HashRouter> 
  );
}

export default App;
