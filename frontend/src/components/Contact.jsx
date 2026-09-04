import React, { useState } from 'react';
import { motion } from 'framer-motion';
import './Contact.css';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const [status, setStatus] = useState({
    submitting: false,
    info: { error: false, msg: null }
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleServerResponse = (ok, msg) => {
    if (ok) {
      setStatus({
        submitting: false,
        info: { error: false, msg: msg }
      });
      setFormData({
        name: '',
        email: '',
        message: ''
      });
    } else {
      setStatus({
        submitting: false,
        info: { error: true, msg: msg }
      });
    }

    setTimeout(() => {
      setStatus(prev => ({ ...prev, info: { error: false, msg: null } }));
    }, 5000);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus(prevStatus => ({ ...prevStatus, submitting: true }));

    try {
      const API_URL = (import.meta.env.VITE_API_URL || 'http://localhost:5000').replace(/\/$/, '');
      const res = await fetch(`${API_URL}/api/contact`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
      });

      const data = await res.json();

      if (res.ok) {
        handleServerResponse(true, 'Thank you! Your message has been sent successfully.');
      } else {
        handleServerResponse(false, data.msg || 'Something went wrong. Please try again.');
      }
    } catch (error) {
      handleServerResponse(false, 'Failed to connect to the server. Please check your connection.');
    }
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2, delayChildren: 0.2 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -30 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.6 } }
  };

  const formVariants = {
    hidden: { opacity: 0, x: 30 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.6 } }
  };

  return (
    <section id="contact" className="contact-section">
      <div className="container">
        <motion.h2
          className="heading-lg text-center"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.6 }}
        >
          Get In <span className="text-gradient">Touch</span>
        </motion.h2>

        <motion.div
          className="contact-content"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={containerVariants}
        >
          <motion.div className="contact-info glass-panel" variants={itemVariants}>
            <h3 className="heading-md">Let's build something amazing together!</h3>
            <p className="text-secondary mb-4">
              Whether you have a question, a project idea, or just want to say hi,
              I'll try my best to get back to you!
            </p>

            <div className="info-items">
              <div className="info-item">
                <div className="info-icon">📧</div>
                <div>
                  <h4 className="info-title">Email</h4>
                  <a href="mailto:srasti.jain11@gmail.com" className="info-desc">srasti.jain11@gmail.com</a>
                </div>
              </div>
              <div className="info-item">
                <div className="info-icon">📍</div>
                <div>
                  <h4 className="info-title">Location</h4>
                  <p className="info-desc">Noida / Remote</p>
                </div>
              </div>
              <div className="info-item">
                <div className="info-icon">💼</div>
                <div>
                  <h4 className="info-title">Availability</h4>
                  <p className="info-desc">Open for opportunities</p>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.form
            className="contact-form glass-panel"
            onSubmit={handleSubmit}
            variants={formVariants}
          >
            <div className="form-group-row">
              <div className="form-group">
                <label htmlFor="name">Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  placeholder="John Doe"
                />
              </div>
              <div className="form-group">
                <label htmlFor="email">Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  placeholder="john@example.com"
                />
              </div>
            </div>

            <div className="form-group">
              <label htmlFor="message">Message</label>
              <textarea
                id="message"
                name="message"
                rows="5"
                value={formData.message}
                onChange={handleChange}
                required
                placeholder="Tell me about your project..."
              ></textarea>
            </div>

            <motion.button
              type="submit"
              className="btn btn-primary submit-btn"
              disabled={status.submitting}
              whileHover={{ scale: status.submitting ? 1 : 1.02 }}
              whileTap={{ scale: status.submitting ? 1 : 0.98 }}
            >
              {status.submitting ? 'Sending...' : 'Send Message'}
            </motion.button>

            {status.info.msg && (
              <motion.div
                className={`form-status ${status.info.error ? 'error' : 'success'}`}
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
              >
                {status.info.msg}
              </motion.div>
            )}
          </motion.form>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
