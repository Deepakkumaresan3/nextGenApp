import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css';

const Home: React.FC = () => {
  return (
    <div className="home">

      {/* Hero Section */}
      <section className="hero">
        <div className="hero-overlay"></div>
        <div className="hero-content">
          <h1>
            <span className="welcome-text">Welcome to</span>
            NextGen Solar Solutions
          </h1>
          <h2>Powering a Sustainable Future</h2>
          <p>Harnessing the sun's energy to create a cleaner, greener tomorrow</p>
          <div className="hero-buttons">
            <Link to="/quote" className="btn btn-primary">Get a Free Quote</Link>
            <Link to="/services" className="btn btn-secondary">Explore Services</Link>
          </div>
        </div>
        <div className="scroll-indicator">
          <span>Scroll Down</span>
          <i className="fas fa-chevron-down"></i>
        </div>
      </section>

      {/* What We Do Section */}
      <section className="what-we-do section">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">What We Do</h2>
            <p className="section-description">At NextGen Solar Solutions, we provide comprehensive solar energy solutions</p>
          </div>

          <div className="services-grid">
            <div className="service-card">
              <div className="service-icon">
                <i className="fas fa-solar-panel"></i>
              </div>
              <h3>Residential Solar</h3>
              <p>Transform your home with custom solar solutions designed for maximum efficiency and savings.</p>
            </div>

            <div className="service-card">
              <div className="service-icon">
                <i className="fas fa-building"></i>
              </div>
              <h3>Commercial Solar</h3>
              <p>Reduce operational costs and showcase your commitment to sustainability with our commercial solutions.</p>
            </div>

            <div className="service-card">
              <div className="service-icon">
                <i className="fas fa-industry"></i>
              </div>
              <h3>Industrial Solar</h3>
              <p>Power your industrial operations with large-scale solar installations designed for high performance.</p>
            </div>

            <div className="service-card">
              <div className="service-icon">
                <i className="fas fa-tools"></i>
              </div>
              <h3>Maintenance</h3>
              <p>Keep your solar system running at peak efficiency with our comprehensive maintenance services.</p>
            </div>

            <div className="service-card">
              <div className="service-icon">
                <i className="fas fa-lightbulb"></i>
              </div>
              <h3>Energy Consulting</h3>
              <p>Get expert advice on optimizing your energy usage and maximizing your solar investment.</p>
            </div>

            <div className="service-card">
              <div className="service-icon">
                <i className="fas fa-leaf"></i>
              </div>
              <h3>Sustainable Solutions</h3>
              <p>Explore our range of eco-friendly energy solutions beyond traditional solar panels.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="why-choose-us section">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">Why Choose Us</h2>
            <p className="section-description">Our commitment to excellence sets us apart</p>
          </div>

          <div className="why-choose-content">
            <div className="benefits-image">
              <img src="/assets/whyUS1.svg" alt="Solar Benefits" />
            </div>

            <div className="benefits-content">
              <div className="benefit-item">
                <h4>Expert Installation</h4>
                <p>Our certified technicians ensure professional installation with industry-leading warranties.</p>
              </div>
              <div className="benefit-item">
                <h4>Customized Solutions</h4>
                <p>We design solar systems tailored to your specific energy needs and budget.</p>
              </div>
              <div className="benefit-item">
                <h4>24/7 Support</h4>
                <p>Round-the-clock customer support and maintenance services for peace of mind.</p>
              </div>
              <div className="benefit-item">
                <h4>Competitive Pricing</h4>
                <p>Transparent pricing with no hidden fees and flexible financing options.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;