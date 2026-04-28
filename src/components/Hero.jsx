// Copy and paste this to replace the entire Hero.jsx file
import React, { useState, useEffect } from 'react';
import './Hero.css';

const Hero = () => {
  const greetings = ["Hello", "வணக்கம்"];
  const [greetingIndex, setGreetingIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setGreetingIndex((prev) => (prev + 1) % greetings.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="hero-section">
      <div className="hero-glass-card">
        <h3 className="greeting-text">{greetings[greetingIndex]}! I am</h3>
        <h1><span className="highlight">Dhineshkumar</span></h1>
        <h2>Full-Stack MERN Developer</h2>
        <p>
          I architect scalable web applications and specialize in integrating 
          AI services to build smart, high-performance solutions.
        </p>
        <div className="hero-buttons">
          <a href="#projects" className="btn-primary">Explore My Work</a>
          
          {/* 👇 Here is your new Resume Button 👇 */}
          <a 
            href="https://drive.google.com/file/d/16LuEbDRoZef_lIKA-UpjCA-qLnglOX7Z/view?usp=sharing" 
            target="_blank" 
            rel="noreferrer" 
            className="btn-secondary"
          >
            📄 View Resume
          </a>

          <a href="https://github.com/dhineshkumarp11" target="_blank" rel="noreferrer" className="btn-secondary">GitHub</a>
        </div>
      </div>
    </section>
  );
};

export default Hero;