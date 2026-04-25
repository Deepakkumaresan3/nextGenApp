import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css';

const Footer: React.FC = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-section">
            <img src="/assets/NexGenLogo.svg" alt="NextGen Logo" className="footer-logo" />
            <h3>NextGen Solar Solutions</h3>
            <p>Leading the way in sustainable solar energy solutions for a brighter future.</p>
          </div>

          <div className="footer-section">
            <h4>Quick Links</h4>
            <ul>
              <li><Link to="/home">Home</Link></li>
              <li><Link to="/services">Services</Link></li>
              <li><Link to="/products">Products</Link></li>
              <li><Link to="/about">About Us</Link></li>
              <li><Link to="/contact">Contact</Link></li>
            </ul>
          </div>

          <div className="footer-section">
            <h4>Contact Info</h4>
            <div className="contact-item">
              <i className="fas fa-map-marker-alt"></i>
              <div className="contact-text">
                <span>35/B, Karnakollai North Street,</span>
                <span>Kumbakonam 612002, Tamil Nadu</span>
              </div>
            </div>
            <div className="contact-item">
              <i className="fas fa-phone"></i>
              <div className="contact-text">
                <span>+91 9025328583</span>
                <span>+91 8682822667</span>
              </div>
            </div>
            <div className="contact-item">
              <i className="fas fa-envelope"></i>
              <div className="contact-text">
                <span>nextgen.kmu24@gmail.com</span>
              </div>
            </div>
          </div>

          <div className="footer-section">
            <h4>Business Hours</h4>
            <p>Monday - Friday: 9:00 AM - 6:00 PM</p>
            <p>Saturday: 9:00 AM - 2:00 PM</p>
            <p>Sunday: Closed</p>
          </div>
        </div>

        <div className="footer-bottom">
          <p>&copy; 2024 NextGen Solar Solutions. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;