import React from 'react';
import './Contact.css';

const Contact = () => {
  return (
    <footer id="contact" className="contact-section">
      <div className="contact-container">
        <h2>Get In Touch</h2>
        <p>
          I am always open to discussing new projects, creative ideas, or opportunities to be part of your visions. Feel free to reach out!
        </p>
        
        <div className="contact-info">
          <a href="mailto:pdhineshkumar555@gmail.com" className="contact-link">
            📧 pdhineshkumar555@gmail.com
          </a>
          <a href="tel:+919360319743" className="contact-link">
            📞 +91 9360319743
          </a>
        </div>

        <div className="social-links">
          <a href="https://github.com/dhineshkumarp11" target="_blank" rel="noreferrer">GitHub</a>
          <a href="https://www.linkedin.com/in/pdhineshkumar" target="_blank" rel="noreferrer">LinkedIn</a>
          <a href="https://leetcode.com/u/dhineshkumarp11/" target="_blank" rel="noreferrer">LeetCode</a>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; {new Date().getFullYear()} Dhineshkumar P. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Contact;