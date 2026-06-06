import React, { useState, useRef } from 'react';
import emailjs from '@emailjs/browser';
import resumePdf from '../assets/resume.pdf';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    role: 'Hiring Manager',
    message: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');
  const formRef = useRef(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) {
      setErrorMsg('Please fill in all required fields.');
      return;
    }

    setErrorMsg('');
    setIsSubmitted(true);

    emailjs.sendForm(
      import.meta.env.VITE_EMAILJS_SERVICE_ID,
      import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
      formRef.current,
      import.meta.env.VITE_EMAILJS_PUBLIC_KEY
    )
      .then(() => {
        setTimeout(() => {
          setFormData({
            name: '',
            email: '',
            role: 'Hiring Manager',
            message: ''
          });
          setIsSubmitted(false);
        }, 4000);
      })
      .catch(() => {
        setErrorMsg('Failed to send. Please try again later.');
        setIsSubmitted(false);
      });
  };

  return (
    <section id="contact" className="section">
      <div className="section-title-wrap">
        <span className="section-subtitle">Let's Connect</span>
        <h2 className="section-title">Get In Touch</h2>
      </div>

      <div className="contact-grid">
        {/* Info Column */}
        <div className="contact-info animate-fade-in">
          <h3 className="contact-info-title">Let's Discuss Coffee & Collaboration</h3>
          <p className="contact-info-desc">
            Are you looking for a passionate, growth-minded apprentice to join your team? Or do you just want to share extraction tips and talk espresso mechanics? Drop me a line—I am eager to learn and work!
          </p>

          <div className="contact-list">
            <div className="contact-item">
              <div className="contact-icon-wrapper">
                📍
              </div>
              <div className="contact-item-text">
                <span className="contact-item-label">Location</span>
                <span className="contact-item-val">Oshawa, ON</span>
              </div>
            </div>

            <div className="contact-item">
              <div className="contact-icon-wrapper">
                ✉️
              </div>
              <div className="contact-item-text">
                <span className="contact-item-label">Email</span>
                <span className="contact-item-val">melvinmviado@gmail.com</span>
              </div>
            </div>

            <div className="contact-item">
              <div className="contact-icon-wrapper">
                📞
              </div>
              <div className="contact-item-text">
                <span className="contact-item-label">Phone</span>
                <span className="contact-item-val">(647) 614-5909</span>
              </div>
            </div>
          </div>

          <div style={{ marginBottom: '40px' }}>
            <h4 style={{ fontSize: '1rem', marginBottom: '16px', color: 'var(--text-primary)' }}>Download Credentials:</h4>
            <a
              href={resumePdf}
              className="btn btn-primary"
              download="Melvin_Viado_Resume.pdf"
            >
              📥 Download Resume (PDF)
            </a>
          </div>

          <div>
            <h4 style={{ fontSize: '1rem', marginBottom: '16px', color: 'var(--text-primary)' }}>Find Me Online:</h4>
            <div className="social-links">
              <a target="_blank" href="https://github.com/melvinmviado" className="social-icon-btn" aria-label="GitHub Code Profile" title="GitHub Code Repositories">
                💻
              </a>
            </div>
          </div>
        </div>

        {/* Contact Form Column */}
        <div className="glass-card contact-form-card animate-slide-up">
          <form ref={formRef} className="contact-form" onSubmit={handleSubmit}>
            <div className="form-group-row">
              <div className="form-group">
                <label htmlFor="form-name" className="form-label">Your Name *</label>
                <input
                  type="text"
                  id="form-name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="e.g. Sarah Connor"
                  className="form-input"
                  required
                />
              </div>

              <div className="form-group">
                <label htmlFor="form-email" className="form-label">Email Address *</label>
                <input
                  type="email"
                  id="form-email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="e.g. sarah@example.com"
                  className="form-input"
                  required
                />
              </div>
            </div>

            <div className="form-group">
              <label htmlFor="form-role" className="form-label">Who are you?</label>
              <select
                id="form-role"
                name="role"
                value={formData.role}
                onChange={handleChange}
                className="form-input"
                style={{ appearance: 'none', background: 'var(--bg-primary) url("data:image/svg+xml;charset=utf-8,%3Csvg xmlns=%27http://www.w3.org/2000/svg%27 viewBox=%270 0 24 24%27 width=%2724%27 height=%2724%27 fill=%27none%27 stroke=%27%23b0743b%27 stroke-width=%272%27%3E%3Cpolyline points=%276 9 12 15 18 9%27/%3E%3C/svg%3E") no-repeat right 16px center' }}
              >
                <option value="Hiring Manager">Cafe Owner / Hiring Manager</option>
                <option value="Lead Barista">Lead Barista / Roaster</option>
                <option value="Coffee Enthusiast">Coffee Enthusiast</option>
                <option value="Other">Other</option>
              </select>
            </div>

            <div className="form-group">
              <label htmlFor="form-message" className="form-label">Your Message *</label>
              <textarea
                id="form-message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Hi Melvin, we have an open barista slot at our cafe..."
                className="form-input"
                required
              />
            </div>

            {errorMsg && (
              <div style={{ color: '#d32f2f', fontWeight: 'bold', fontSize: '0.9rem' }}>
                ⚠️ {errorMsg}
              </div>
            )}

            <div className="form-submit-row">
              <button
                type="submit"
                className="btn btn-primary"
                disabled={isSubmitted}
              >
                {isSubmitted ? 'Sending...' : 'Send Message ✉️'}
              </button>

              {isSubmitted && (
                <span className="form-success-msg">
                  ✓ Message sent successfully!
                </span>
              )}
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}
