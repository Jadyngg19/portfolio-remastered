import "./Form.css"

import React from 'react'

const Form = () => {
  return (
    <div className="form">
      <form>
        <label>Your Name</label>
        <input type="text"></input>
        <label>Email Address</label>
        <input type="email"></input>
        <label>Subject</label>
        <input type="text"></input>
        <label>Message</label>
        <textarea rows="6" placeholder="Type your message here and I will get back to you!"/>
        <button className="submit">Submit</button>
      </form>
    </div>
  )
}

export default Form;