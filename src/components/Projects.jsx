import React from 'react';
import './Projects.css';

const Projects = () => {
  const projectList = [
    {
      title: "Academic Knowledge Engine",
      description: "Developed an AI-powered academic knowledge management platform using the MERN stack. Integrated Google Gemini API to automatically summarize research papers into structured study notes. Implemented secure RESTful APIs, document management, search functionality, and scalable CRUD operations with MongoDB.",
      tech: "MongoDB, Express.js, React.js, Node.js, Google Gemini API",
      link: "https://academic-knowledge-engine.vercel.app/"
    },
    {
      title: "Todos Application",
      description: "Built a persistent task-tracking app with full CRUD functionality. Implemented dynamic UI updates using JavaScript DOM manipulation and state persistence via localStorage.",
      tech: "HTML, CSS, JS, Bootstrap",
      link: "https://pdktodos.ccbp.tech"
    },
    {
      title: "Wikipedia Search Application",
      description: "Created a custom search tool using REST API calls to fetch and display curated results, offering a seamless user experience.",
      tech: "HTML, CSS, JS, REST API",
      link: "https://pdkwikiapp.ccbp.tech"
    },
    {
      title: "Food Munch",
      description: "Developed a responsive website showcasing food items using HTML and Bootstrap for optimal browsing across devices.",
      tech: "HTML, CSS, Bootstrap",
      link: "https://pdkfoodmunch.ccbp.tech"
    }
  ];

  return (
    <section id="projects" className="projects-section">
      <div className="projects-container">
        <h2>Featured Projects</h2>
        <div className="projects-grid">
          {projectList.map((project, index) => (
            <div className="project-card" key={index}>
              <h3>{project.title}</h3>
              <p>{project.description}</p>
              <span className="tech-stack"><strong>Tech:</strong> {project.tech}</span>
              <a href={project.link} target="_blank" rel="noreferrer" className="project-link">
                View Live App →
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;