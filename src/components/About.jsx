import React from 'react';
import ProfileImage from '../assets/profile.png';
import './About.css';

function About() {
  return (
    <div id="about" className="about-section">
      <h2 className="about-title">
        <span>About</span> <span className="me">Me</span>
      </h2>
      <div className="content-about">
        <div className="about-para">
          <p>I am a skilled web developer with a strong foundation in both frontend and backend technologies. Through comprehensive training in <span className='me'>HTML5, CSS, JavaScript, Bootstrap, jQuery, React, Angular, TypeScript</span>, and backend technologies like <span className='me'>PHP, Node.js, Express, MongoDB, and MySQL</span>, I have developed a well-rounded expertise in web development.</p>

          <p>During my two-year tenure at T4TEQ Software Company, I had the privilege of applying my knowledge to real-world projects, gaining hands-on experience in building and deploying web applications. This opportunity not only strengthened my technical abilities but also allowed me to contribute to meaningful projects, enhancing my problem-solving and teamwork skills.</p>

          <p>I have experience in developing client-side forms with validation, establishing database connectivity, and implementing API integrations using Axios. Whether working with MERN (MongoDB, Express, React, Node.js), where I utilize React Hooks and React Bootstrap, or with MEAN (MongoDB, Express, Angular, Node.js), focusing on Angular Directives, Template-driven and Reactive forms, I am adept at building scalable, user-friendly web applications.</p>
        </div>
        <div className="profile-image">
          <img src={ProfileImage} alt="Profile-Image" />
        </div>
        
      </div>
     
    </div>
  );
}

export default About;
