import React from "react";
import NavBar from "../components/NavBar/NavBar";
import HeroImg from "../components/HomePage/HeroImg.js";
import Footer from "../components/ContactForm/Footer/Footer";

const Home  = () => {
    return (
        <div>
        <NavBar/>
        <HeroImg />
        <Footer/>
        </div>
    )
}

export default Home;