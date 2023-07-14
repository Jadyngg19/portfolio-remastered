import React from 'react';
import './index.css';
import Home from './routes/HomePage';
import Projects from './routes/Projects';
import ContactInfo from './routes/ContactInfo';
import Resume from './routes/Resume';
import { Switch, Route } from 'react-router-dom';

function App() {
  return (
    <Switch>
      <Route exact path="/" component={Home} />
      <Route path="/Projects" component={Projects} />
      <Route path="/ContactInfo" component={ContactInfo} />
      <Route path="/Resume" component={Resume} />
    </Switch>
  );
}

export default App;
