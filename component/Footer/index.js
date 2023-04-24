import React from "react";
import { FaFacebook, FaTwitter, FaInstagram } from "react-icons/fa";
import "./index.css";

function Footer() {
  return (
    <div className="footer-container">
      <div className="social-icons">
        <a href="https://www.facebook.com/" target="_blank" >
          <FaFacebook height={80} width={80}/>
        </a>
        <a href="https://twitter.com/" target="_blank" >
          <FaTwitter />
        </a>
        <a href="https://www.instagram.com/" target="_blank" >
          <FaInstagram />
        </a>
      </div>
      <div className="copy-right">
        © 2023 Your Company. All Rights Reserved.
      </div>
    </div>
  );
}

export default Footer;
