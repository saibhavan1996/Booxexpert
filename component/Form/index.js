import React, { useState } from 'react';
import "./index.css"

function ContactForm() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    fetch('/api/contact', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ name, email, subject, message }),
    })
      .then((response) => response.json())
      .then((data) => console.log(data))
      .catch((error) => console.error(error));
  };

  return (
  <form onSubmit={handleSubmit} className="messge-form">
    <h1 className='heading'>Contact Us</h1>
    <div className='input-main-container'>
     <div className='input-container'>
      <label htmlFor="name" className='label'>Name</label>
      <input
        placeholder='name'
        id="name"
        type="text"
        className='input-bar'
        value={name}
        onChange={(event) => setName(event.target.value)}
        required
      />
     </div>
     <div className='input-container'>
      <label htmlFor="email" className='label'>Email:</label>
      <input
        id="email"
        placeholder='email'
        className='input-bar'
        type="email"
        value={email}
        onChange={(event) => setEmail(event.target.value)}
        required
      />
     </div>
     <div className='input-container'>
      <label htmlFor="subject" className='label'>Subject:</label>
      <input
        id="subject"
        placeholder='text'
        type="text"
        className='input-bar' 
        value={subject}
        onChange={(event) => setSubject(event.target.value)}
      />
    </div>
  
<div className='input-container'>
      <label htmlFor="message" className='label'>Message:</label>
      <textarea
        id="message"
        placeholder='message'
        value={message}
        cols={52}
        rows={6}
        className="text-area"
        onChange={(event) => setMessage(event.target.value)}
        required
      ></textarea>
    </div>
    </div>
      <button type="submit" className='send-btn'>Send</button>
  </form>
  );
}
export default ContactForm