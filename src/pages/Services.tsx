import React from 'react';
import './Services.css';

const Services: React.FC = () => {
  const services = [
    {
      id: 1,
      title: 'Residential Solar Installation',
      description: 'Complete solar system installation for homes with customized design and professional setup.',
      icon: 'fas fa-home',
      features: ['Site Assessment', 'System Design', 'Installation', 'Maintenance']
    },
    {
      id: 2,
      title: 'Commercial Solar Solutions',
      description: 'Large-scale solar installations for businesses to reduce energy costs and carbon footprint.',
      icon: 'fas fa-building',
      features: ['ROI Analysis', 'Custom Design', 'Grid Integration', 'Monitoring']
    },
    {
      id: 3,
      title: 'Solar Maintenance & Repair',
      description: 'Comprehensive maintenance services to keep your solar system performing at peak efficiency.',
      icon: 'fas fa-tools',
      features: ['Regular Inspection', 'Cleaning', 'Repairs', 'Performance Optimization']
    },
    {
      id: 4,
      title: 'Energy Consulting',
      description: 'Expert consultation to help you make informed decisions about your energy future.',
      icon: 'fas fa-lightbulb',
      features: ['Energy Audit', 'Cost Analysis', 'System Recommendations', 'Incentives Guidance']
    },
    {
      id: 5,
      title: 'Battery Storage Systems',
      description: 'Advanced energy storage solutions for reliable power during outages and peak demand.',
      icon: 'fas fa-battery-full',
      features: ['Battery Installation', 'System Integration', 'Backup Power', 'Smart Management']
    },
    {
      id: 6,
      title: 'Solar Panel Cleaning',
      description: 'Professional cleaning services to maintain optimal solar panel efficiency and performance.',
      icon: 'fas fa-sun',
      features: ['Safe Cleaning', 'Efficiency Testing', 'Debris Removal', 'Protective Coating']
    }
  ];

  return (
    <div className="services-page">
      <div className="services-container">
        <div className="section-header">
          <h1 className="section-title">Our Solar Services</h1>
          <p className="section-description">
            Professional solar solutions for homes and businesses with comprehensive support.
          </p>
        </div>

        <div className="services-grid">
          {services.map((service, index) => (
            <div key={service.id} className="service-card">
              <div className="service-icon">
                <i className={service.icon}></i>
              </div>
              <h3 className="service-title">{service.title}</h3>
              <p className="service-description">{service.description}</p>
              <ul className="service-features">
                {service.features.map((feature, idx) => (
                  <li key={idx}>
                    <i className="fas fa-check"></i>
                    {feature}
                  </li>
                ))}
              </ul>
              <button className="btn btn-primary">Get Started</button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Services;