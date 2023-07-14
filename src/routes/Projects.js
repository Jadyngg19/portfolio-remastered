import React from 'react'

import NavBar from "../components/NavBar/NavBar";
import Footer from "../components/Footer";
import HeroImg2 from "../components/HeroImg2";
import ExtraProjs from "../components/ExtraProjs";
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