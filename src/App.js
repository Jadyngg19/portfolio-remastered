import React from "react";
import "./index.css";
import Home from "./routes/HomePage";
import Projects from "./routes/Projects";
import ContactInfo from "./routes/ContactInfo";
import Resume from "./routes/Resume";
import {Route, Routes} from "react-router-dom";

function App() {
  return (
<Routes>
  <Route path="/" element={<Home />}> </Route>
  <Route path="/Projects" element={<Projects />}> </Route>
  <Route path="/ContactInfo" element={<ContactInfo />}> </Route>
  <Route path="/Resume" element={<Resume />}> </Route>
</Routes>
  );
}

export default App;
