import React from 'react'

import NavBar from "../components/NavBar/NavBar";
import Footer from "../components/Footer";
import HeroImg2 from '../components/HeroImg2';
import ExtraProjs from '../components/ExtraProjs';
import WorkCard from '../components/WorkCard';

const Projects = () => {
  return (
    <div>
      <NavBar/>
      <HeroImg2/>
      <WorkCard/>
      <ExtraProjs/>
      <Footer/>
    </div>
  )
}

export default Projects;