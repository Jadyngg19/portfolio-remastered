import React from 'react'

import NavBar from "../components/NavBar/index";
import Footer from "../components/Footer/index";
import HeroImg2 from "../components/ProjectsPage/index";
import ExtraProjs from "../components/EarlyWorks/index";
import Work from "../components/Work";

const Projects = () => {
  return (
    <div>
      <NavBar/>
      <HeroImg2/>
      <Work />
      <ExtraProjs/>
      <Footer/>
    </div>
  )
}

export default Projects;