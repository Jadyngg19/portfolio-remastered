import React from 'react'

import NavBar from "../components/NavBar/index";
import Footer from "../components/Footer/index";
import ProjectsPage from "../components/ProjectsPage/index";
import EarlyWorks from "../components/EarlyWorks/index";
import Work from "../components/ProjectCards/Work";

const Projects = () => {
  return (
    <div>
      <NavBar/>
      <ProjectsPage/>
      <Work />
      <EarlyWorks/>
      <Footer/>
    </div>
  )
}

export default Projects;