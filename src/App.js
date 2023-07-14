import React from "react";
import "./index.css";
import Home from "./routes/HomePage";
import Projects from "./routes/Projects";
import ContactInfo from "./routes/ContactInfo";
import Resume from "./routes/Resume";
import { HashRouter, Switch, Route } from 'react-router-dom'; 

function App() {
  return (
    <>
      <HashRouter>
        <Switch>
          <Route exact path="/" component={Home}> </Route>
          <Route path="/Projects" component={Projects}> </Route>
          <Route path="/ContactInfo" component={ContactInfo}> </Route>
          <Route path="/Resume" component={Resume}> </Route>
        </Switch>
      </HashRouter>
    </>
  );
}

export default App;
