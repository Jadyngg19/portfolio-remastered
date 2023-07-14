import React from 'react'

import NavBar from "../components/NavBar/index";
import Footer from "../components/Footer/index";
import Contact from "../components/Contact/index";
import Form from "../components/ContactForm/index"

const ContactInfo = () => {
  return (
    <div>
    <NavBar/>
    <Contact/>
    <Form/>
    <Footer/>
    </div>
  )
}

export default ContactInfo;