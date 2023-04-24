import React, { useState } from 'react';
import {Link} from "react-router-dom"
import './index.css';

function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleUsernameChange = (e) => {
    setUsername(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(`Username: ${username}, Password: ${password}`);
  };

  return (
    <div className="login-container">
      <h1>Login</h1>
      <form onSubmit={handleSubmit}>
        <label htmlFor="username" className='label'>Username:</label>
        <input
          type="text"
          className='input-bar' 
          id="username"
          value={username}
          onChange={handleUsernameChange}
        />
        <label htmlFor="password" className='label'>Password:</label>
        <input
        className='input-bar' 
          type="password"
          id="password"
          value={password}
          onChange={handlePasswordChange}
        />
        <Link to="/Registration" className='link'>
          Registration?
        </Link>
        <Link to="/h">
        <button type="submit" className='log-btn'>Login</button>
        </Link>
      </form>
    </div>
  );
}

export default Login;
