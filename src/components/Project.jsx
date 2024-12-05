import React from 'react';
import './Project.css';
import Project from '../assets/project1.jpg';
import Res from '../assets/form.jpg';
import Port from '../assets/port.avif';
import Portfo from '../assets/portfo.avif';


const projects = [
  { 
    name: 'TEQ Base', 
    image: Project, 
    github: 'https://github.com/Aravind-Natarajan/TEQ-Base', 
    description: 'TEQ Base is a platform that helps institutions assign students to staff based on staff availability and expertise, schedule them for specific time slots and courses, generate staff reports, and manage both student and staff details.' 
  },
  { 
    name: 'Registration Form', 
    image: Res, 
    github: 'https://github.com/Aravind-Natarajan/Student_Project', 
    description: 'A registration form designed to manage the details of individuals who have inquired about a specific course but have not yet enrolled, developed with React, Node.js, Express, and MongoDB.' 
  },
  { 
    name: 'Portfolio', 
    image: Port, 
    github: 'https://github.com/Aravind-Natarajan/Portfolio.git', 
    description: 'Developed a dynamic and responsive portfolio website using React for the frontend and EmailJS for managing contact details, effectively showcasing projects and skills in an interactive and professional manner.' 
  },
  { 
    name: 'Portfolio', 
    image: Portfo, 
    github: 'https://github.com/Aravind-Natarajan/Basic-Portfolio-.git', 
    description: 'Developed a dynamic and responsive portfolio website using HTML and CSS for the frontend and JS for managing contact details, effectively showcasing projects and skills in an interactive and professional manner.' 
  },
];

function Projects() {
  return (

    <div id="projects" className="projects-section">
      <h2>Projects</h2>
      <div className="projects-grid">
        {projects.map((project, index) => (
          <div key={index} className="project-card">
            <div className="card-image">
              <img src={project.image} alt={project.name} />
            </div>
            <h3>{project.name}</h3>
            <p>{project.description}</p>
            <a href={project.github} target="_blank" rel="noopener noreferrer">
              View on GitHub
            </a>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Projects;