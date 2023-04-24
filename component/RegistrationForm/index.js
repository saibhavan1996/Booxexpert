import React, { useState } from "react";
import "./index.css";
import { Link } from "react-router-dom";

function Registration() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const[name,setName]=useState("")

  const handleRegistration = (event) => {
    event.preventDefault();
  };

  return (
     <div className="regi-container">
     <h1 className='heading'>Register</h1>
     <form onSubmit={handleRegistration} className="messge-form">
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
       <label htmlFor="email" className='label'>Email</label>
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
       <label htmlFor="Password" className='label'>Password</label>
       <input
         id="Password"
         placeholder='password'
         type="password"
         className='input-bar' 
         value={password}
         onChange={(event) => setPassword(event.target.value)}
       />
     </div>
         </div>
         <Link to="/h">
       <button type="submit" className='send-btn'>Register</button>
       </Link>
   </form> 
   </div>
  );
}

export default Registration;
