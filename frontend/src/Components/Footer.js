import React from "react";
import { FaHome, FaPhone, FaMailBulk, FaFacebook, FaTwitter, FaLinkedin, FaInstagram, FaWhatsapp } from "react-icons/fa";
import "./Footerstyle.css";

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-container">
        <div className="left">
          <div className="location">
            <FaHome size={20} style={{ color: "#fff", marginRight: "0.5rem" }} />
            <p>Chittoor, Andhra Pradesh</p>
          </div>
          <div className="phone">
            <h4>
              <FaPhone size={20} style={{ color: "#fff", marginRight: "0.5rem" }} />
              9440386979
            </h4>
          </div>
          <div className="email">
            <h4>
              <FaMailBulk size={20} style={{ color: "#fff", marginRight: "0.5rem" }} />
              vanjali9440@gmail.com
            </h4>
          </div>
          <div className="instagram">
            <h4>
              <FaInstagram size={20} style={{ color: "#fff", marginRight: "0.5rem" }} />
             anjaliangel_1729 
            </h4>
          </div>
          
        </div>
        <div className="right">
          <h2>About the Writing</h2>
          <p>
            Hey, I am interested in writing. That's why I developed this web application to post my stories and quotes.
          </p>
          <div className="social">
            <FaFacebook size={30} style={{ color: "#fff", marginRight: "1rem" }} />
            <FaTwitter size={30} style={{ color: "#fff", marginRight: "1rem" }} />
            <FaLinkedin size={30} style={{ color: "#fff", marginRight: "1rem" }} />
            <FaInstagram size={30} style={{ color: "#fff", marginRight: "1rem" }} />
            <FaWhatsapp size={30} style={{ color: "#fff", marginRight: "1rem" }} />


          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
