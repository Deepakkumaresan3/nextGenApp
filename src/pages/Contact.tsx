import React from 'react';
import './Contact.css';

const Contact: React.FC = () => {
  return (
    <div className="contact-page">

      {/* Hero Section */}
      <section className="contact-hero">
        <div className="hero-overlay"></div>
        <div className="hero-content">
          <h1>Contact Us</h1>
          <p>We're here to answer your questions and provide the solar solutions you need</p>
        </div>
      </section>

      {/* Contact Section */}
      <section className="contact-section section">
        <div className="container">
          <div className="contact-content">
            {/* Contact Info */}
            <div className="contact-info">
              <h2>Get In Touch</h2>
              <div className="info-grid">
                <div className="info-item">
                  <i className="fas fa-map-marker-alt"></i>
                  <div className="info-text">
                    <h4>Address</h4>
                    <p>35/B, Karnakollai North Street,<br />Kumbakonam 612002, Tamil Nadu</p>
                  </div>
                </div>
                <div className="info-item">
                  <i className="fas fa-phone"></i>
                  <div className="info-text">
                    <h4>Phone</h4>
                    <p>+91 9025328583</p>
                    <p>+91 8682822667</p>
                  </div>
                </div>
                <div className="info-item">
                  <i className="fas fa-envelope"></i>
                  <div className="info-text">
                    <h4>Email</h4>
                    <p>nextgen.kmu24@gmail.com</p>
                  </div>
                </div>
                <div className="info-item">
                  <i className="fas fa-clock"></i>
                  <div className="info-text">
                    <h4>Business Hours</h4>
                    <p>Monday - Friday: 9:00 AM - 6:00 PM</p>
                    <p>Saturday: 9:00 AM - 2:00 PM</p>
                    <p>Sunday: Closed</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="contact-form">
              <h2>Send us a Message</h2>
              <form>
                <div className="form-group">
                  <input type="text" placeholder="Your Name" required />
                </div>
                <div className="form-group">
                  <input type="email" placeholder="Your Email" required />
                </div>
                <div className="form-group">
                  <input type="tel" placeholder="Your Phone" />
                </div>
                <div className="form-group">
                  <select>
                    <option value="">Select Service</option>
                    <option value="residential">Residential Solar</option>
                    <option value="commercial">Commercial Solar</option>
                    <option value="maintenance">Maintenance</option>
                    <option value="consulting">Energy Consulting</option>
                    <option value="other">Other</option>
                  </select>
                </div>
                <div className="form-group">
                  <textarea placeholder="Your Message" rows={5} required></textarea>
                </div>
                <button type="submit" className="btn btn-primary">Send Message</button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="map-section">
        <div className="container">
          <h2>Find Us</h2>
          <div className="map-container">
            {/* Placeholder for map - in real implementation, use Google Maps or similar */}
            <div className="map-placeholder">
              <i className="fas fa-map-marked-alt"></i>
              <p>Interactive Map Coming Soon</p>
              <p>35/B, Karnakollai North Street, Kumbakonam 612002, Tamil Nadu</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;