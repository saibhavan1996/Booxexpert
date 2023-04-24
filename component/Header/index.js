import React from "react"
import { Link } from "react-router-dom";

import "./index.css"

function Header (){
return(
     <div className="web-main-bg-container">
          <header className="navbar">
          <Link to="/h" className="link">
               <img src="https://res.cloudinary.com/sai-muali/image/upload/v1682147910/logo_w3vank.png" alt="logo" className="logo-image"/>
               </Link>
          <ul className="nav-list">
               <Link to="/h" className="link"><li className="list-item">Home</li></Link>
               <Link to="/about" className="link"><li className="list-item">About Us</li></Link> 
               <Link to="/blogs" className="link"><li className="list-item">Blogs</li></Link>
               <Link to="/services" className="link"><li className="list-item">Services</li></Link>
          </ul>
          <Link to="/">
               <button type="submit" className='log-btn'>Logout</button>
               </Link>
          </header>
     </div>
)
}
export default Header