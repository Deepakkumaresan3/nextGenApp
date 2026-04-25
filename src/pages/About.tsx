import React from 'react';
import './About.css';

const About: React.FC = () => {
  return (
    <div className="about-page">
      {/* Hero Section */}
      <section className="about-hero">
        <div className="hero-overlay"></div>
        <div className="hero-content">
          <h1>About NextGen Solar Solutions</h1>
          <p>Excellence in workmanship, sustainability for a greener future, unwavering safety, and simplified solar solutions for all.</p>
        </div>
      </section>

      {/* Mission Section */}
      <section className="mission-section section">
        <div className="container">
          <div className="mission-content">
            <div className="mission-text">
              <h2>Our Mission</h2>
              <p>At NextGen Solar Solutions, we are committed to transforming lives through top-notch workmanship, eco-friendly solutions, uncompromised safety, and seamless solar energy adoption. We believe that sustainable energy should be accessible to everyone, and we're here to make that vision a reality.</p>
            </div>
            <div className="mission-image">
              <img src="/assets/sus.svg" alt="Sustainable Solutions" />
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="values-section section">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">Our Core Values</h2>
            <p className="section-description">The principles that guide everything we do</p>
          </div>

          <div className="values-grid">
            <div className="value-card">
              <div className="value-icon">
                <i className="fas fa-hammer"></i>
              </div>
              <h3>Strong Workmanship</h3>
              <p>Excellence in every detail. Our skilled team ensures that every project is completed with precision, durability, and craftsmanship that stands the test of time.</p>
            </div>

            <div className="value-card">
              <div className="value-icon">
                <i className="fas fa-leaf"></i>
              </div>
              <h3>Sustainability</h3>
              <p>Committed to a greener future. We create energy solutions that minimize environmental impact, conserve resources, and reduce carbon footprints.</p>
            </div>

            <div className="value-card">
              <div className="value-icon">
                <i className="fas fa-shield-alt"></i>
              </div>
              <h3>Safety First</h3>
              <p>Uncompromised safety standards. Every installation follows strict safety protocols to protect our team, customers, and the environment.</p>
            </div>

            <div className="value-card">
              <div className="value-icon">
                <i className="fas fa-users"></i>
              </div>
              <h3>Customer Focus</h3>
              <p>Your satisfaction is our priority. We provide personalized service, transparent communication, and ongoing support for all your solar needs.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="stats-section">
        <div className="container">
          <div className="stats-grid">
            <div className="stat-item">
              <div className="stat-number">500+</div>
              <div className="stat-label">Projects Completed</div>
            </div>
            <div className="stat-item">
              <div className="stat-number">10MW+</div>
              <div className="stat-label">Energy Generated</div>
            </div>
            <div className="stat-item">
              <div className="stat-number">98%</div>
              <div className="stat-label">Customer Satisfaction</div>
            </div>
            <div className="stat-item">
              <div className="stat-number">5+</div>
              <div className="stat-label">Years Experience</div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;