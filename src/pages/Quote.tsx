import React from 'react';
import './Quote.css';

const Quote: React.FC = () => {
  return (
    <div className="quote-page">
      {/* Hero Section */}
      <section className="quote-hero">
        <div className="container">
          <div className="hero-content">
            <h1>Get Your Free Solar Quote</h1>
            <p>Have questions about our solar solutions or need a customized energy plan for your home or business?</p>
            <div className="hero-highlights">
              <div className="highlight">
                <i className="fas fa-check-circle"></i>
                <span>Free Consultation</span>
              </div>
              <div className="highlight">
                <i className="fas fa-check-circle"></i>
                <span>Customized Solutions</span>
              </div>
              <div className="highlight">
                <i className="fas fa-check-circle"></i>
                <span>No Obligation</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Quote Form Section */}
      <section className="quote-form-section section">
        <div className="container">
          <div className="quote-content">
            <div className="quote-info">
              <h2>Reach out to us today!</h2>
              <p>We're Here to Help You Harness the Power of the Sun</p>

              <div className="contact-details">
                <div className="contact-item">
                  <i className="fas fa-mobile-alt"></i>
                  <div>
                    <h4>NextGen Solar Solutions</h4>
                    <p>35/B, Karnakollai North Street,<br />Kumbakonam 612002, Tamil Nadu</p>
                  </div>
                </div>
                <div className="contact-item">
                  <i className="fas fa-phone"></i>
                  <div>
                    <p>+91 9025328583</p>
                    <p>+91 8682822667</p>
                  </div>
                </div>
                <div className="contact-item">
                  <i className="fas fa-envelope"></i>
                  <div>
                    <p>nextgen.kmu24@gmail.com</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="quote-form">
              <h3>Request a Quote</h3>
              <form>
                <div className="form-row">
                  <div className="form-group">
                    <input type="text" placeholder="First Name" required />
                  </div>
                  <div className="form-group">
                    <input type="text" placeholder="Last Name" required />
                  </div>
                </div>

                <div className="form-group">
                  <input type="email" placeholder="Email Address" required />
                </div>

                <div className="form-group">
                  <input type="tel" placeholder="Phone Number" required />
                </div>

                <div className="form-group">
                  <input type="text" placeholder="Address" required />
                </div>

                <div className="form-row">
                  <div className="form-group">
                    <select required>
                      <option value="">Property Type</option>
                      <option value="residential">Residential</option>
                      <option value="commercial">Commercial</option>
                      <option value="industrial">Industrial</option>
                    </select>
                  </div>
                  <div className="form-group">
                    <input type="number" placeholder="Monthly Electricity Bill (₹)" />
                  </div>
                </div>

                <div className="form-group">
                  <select>
                    <option value="">Preferred Contact Method</option>
                    <option value="phone">Phone</option>
                    <option value="email">Email</option>
                    <option value="both">Both</option>
                  </select>
                </div>

                <div className="form-group">
                  <textarea placeholder="Tell us about your energy needs..." rows={4}></textarea>
                </div>

                <div className="form-check">
                  <input type="checkbox" id="newsletter" />
                  <label htmlFor="newsletter">Subscribe to our newsletter for solar tips and updates</label>
                </div>

                <button type="submit" className="btn btn-primary btn-large">Get Free Quote</button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Quote;