import React, { useState } from 'react';
import './style.css';

const Form = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');
  const [errors, setErrors] = useState({});

  const validateForm = () => {
    const validationErrors = {};

    if (!name.trim()) {
      validationErrors.name = 'Name is required';
    }
    if (!email.trim()) {
      validationErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      validationErrors.email = 'Invalid email address';
    }
    if (!subject.trim()) {
      validationErrors.subject = 'Subject is required';
    }
    if (!message.trim()) {
      validationErrors.message = 'Message is required';
    }

    setErrors(validationErrors);
    return Object.keys(validationErrors).length === 0;
  };

  const handleBlur = (e) => {
    const fieldName = e.target.name;
    const fieldValue = e.target.value.trim();

    if (!fieldValue) {
      setErrors((prevErrors) => ({ ...prevErrors, [fieldName]: `${fieldName} is required` }));
    } else {
      setErrors((prevErrors) => ({ ...prevErrors, [fieldName]: '' }));
    }
  };

  const handleChange = (e) => {
    const fieldName = e.target.name;
    const fieldValue = e.target.value;
    setErrors((prevErrors) => ({ ...prevErrors, [fieldName]: '' }));

    if (fieldName === 'name') {
      setName(fieldValue);
    } else if (fieldName === 'email') {
      setEmail(fieldValue);
    } else if (fieldName === 'subject') {
      setSubject(fieldValue);
    } else if (fieldName === 'message') {
      setMessage(fieldValue);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (validateForm()) {
      // Handle form submission
      console.log('Form submitted!');
      // Reset form fields
      setName('');
      setEmail('');
      setSubject('');
      setMessage('');
      setErrors({});
    }
  };

  return (
    <div className="form">
      <form onSubmit={handleSubmit}>
        <label>Your Name</label>
        <input type="text" name="name" value={name} onBlur={handleBlur} onChange={handleChange} />
        {errors.name && <span className="error-message">{errors.name}</span>}

        <label>Email Address</label>
        <input type="email" name="email" value={email} onBlur={handleBlur} onChange={handleChange} />
        {errors.email && <span className="error-message">{errors.email}</span>}

        <label>Subject</label>
        <input type="text" name="subject" value={subject} onBlur={handleBlur} onChange={handleChange} />
        {errors.subject && <span className="error-message">{errors.subject}</span>}

        <label>Message</label>
        <textarea name="message" rows="6" value={message} onBlur={handleBlur} onChange={handleChange} placeholder="Type your message here and I will get back to you!" />
        {errors.message && <span className="error-message">{errors.message}</span>}

        <button className="submit" type="submit">
          Submit
        </button>
      </form>
    </div>
  );
};

export default Form;