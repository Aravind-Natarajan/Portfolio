import React from 'react';
import './Work.css';

const Work = () => {
  return (
    <div className="work-section" id="work">
      <h2 className="work-title">Experience</h2>
      
       <div className="timeline">
        <div className="timeline-item left">
          <div className="timeline-content">
            <h3 className="company-name">T4TEQ SOFTWARE SOLUTIONS</h3>
            <p className="role">Junior Web Developer and Lead Trainer</p>
            <p className="date">Jun 2023 - Present | Trichy</p>
            <ul className="responsibilities">
              <li>Developed and maintained web applications using React components and Hooks, Angular, and Node.js.</li>
              <li>Developed and deployed server-side logic using Node.js and Express.</li>
              <li>Implemented authentication and authorization using Passport.js.</li>
              <li>Collaborated with senior developers to resolve issues and improve the codebase.</li>
            </ul>
          </div>
        </div>

        <div className="timeline-item right">
          <div className="timeline-content">
            <h3 className="company-name">LCS SOLUTION</h3>
            <p className="role">Quality Analyst and Trainer</p>
            <p className="date">Oct 2020 - May 2023 | Trichy</p>
            <ul className="responsibilities">
              <li>Lead a team for EPUB, XML, and digital conversions, and digital publishing.</li>
              <li>Handled data processing projects and XML E-Book Projects (Styling, Tag Editing, QC).</li>
              <li>I used editors such as Epsilon and MS Word for project tasks.</li>
              <li>Identified the errors, and resolved them using Oxygen XML Editor.</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Work;
