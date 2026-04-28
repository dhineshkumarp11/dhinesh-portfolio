import React from 'react';
import profileImg from '../assets/profile.png'; // Make sure this matches your image name!
import './About.css';

const About = () => {
  return (
    <section id="about" className="about-section">
      <div className="about-container">
        <div className="about-image">
          <img src={profileImg} alt="Dhineshkumar P" />
        </div>
        <div className="about-content">
          <h2>About Me</h2>
          <p>
            I am a Computer Science Engineering student at Bannari Amman Institute of Technology, currently pursuing an Industry Ready Certification in Full-stack Development from Nxtwave. My journey spans from building responsive static sites to developing dynamic web applications. I specialize in crafting seamless user interfaces using React and building robust backends with Node.js and Python. 
          </p>
          
          {/* 👇 We added id="skills" right here 👇 */}
          <div id="skills" className="skills-container">
            <h3>Technical Skills</h3>
            <div className="skills-grid">
              <div className="skill-category">
                <h4>Frontend</h4>
                <p>HTML, CSS, Bootstrap, JavaScript, React.js</p>
              </div>
              <div className="skill-category">
                <h4>Backend</h4>
                <p>C, Java, Python, Express, Node.js</p>
              </div>
              <div className="skill-category">
                <h4>Databases</h4>
                <p>SQL, SQLite</p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default About;