import React, { useState } from 'react';
import './ContactForm.css';

const ContactForm = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });

  function handleChange(e) {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  }

  // handle form submission
  function handleSubmit(e) {
    e.preventDefault();
    console.log('Form submitted:', formData);

    // clear the form
    setFormData({
      name: '',
      email: '',
      message: '',
    });
  }

  return (

    <div className='contact-form-container' id='contact'>
      
        <div className='contact-layout'>
        <h2>Contact Us</h2>
      <form onSubmit={handleSubmit} className='contact-form'>
        <label htmlFor='name'>Name:</label>
        <input type='text' id='name' name='name' value={formData.name} onChange={handleChange} required />

        <label htmlFor='email'>Email:</label>
        <input type='email' id='email' name='email' value={formData.email} onChange={handleChange} required />

        <label htmlFor='message'>Message:</label>
        <textarea 
          id='message' 
          name='message' 
          value={formData.message} 
          onChange={handleChange} 
          required 
        />

        <button type='submit'>Send Message</button>
      </form>
      <div className='location'>
          <h3>Our Location</h3>
          <p>123 Ice Cream Street, Sweet Town, CA</p>
          <p>Phone: (555) 123-4567</p>
          <p>Email: contact@icecreamshop.com</p>

          <h3>Working Hours</h3>
          <p>Monday - Friday: 9:00 AM - 6:00 PM</p>
          <p>Saturday: 10:00 AM - 4:00 PM</p>
          <p>Sunday: Closed</p>
        </div>
      </div>
    </div>
  );
}

export default ContactForm;
