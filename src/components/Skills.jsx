import React from 'react';
import { FaHtml5, FaCss3Alt, FaJs, FaReact, FaNodeJs, FaPhp } from 'react-icons/fa';
import { SiMysql, SiMongodb, SiFigma, SiJquery, SiBootstrap, SiAngular } from 'react-icons/si';
import './Skills.css';

const skills = [
  { name: 'HTML', icon: <FaHtml5 />, level: 90 },
  { name: 'CSS', icon: <FaCss3Alt />, level: 85 },
  { name: 'JavaScript', icon: <FaJs />, level: 80 },
  { name: 'React', icon: <FaReact />, level: 75 },
  { name: 'Node.js', icon: <FaNodeJs />, level: 70 },
  { name: 'PHP', icon: <FaPhp />, level: 65 },
  { name: 'MySQL', icon: <SiMysql />, level: 85 },
  { name: 'MongoDB', icon: <SiMongodb />, level: 75 },
  { name: 'Figma', icon: <SiFigma />, level: 80 },
  { name: 'Bootstrap', icon: <SiBootstrap />, level: 85 },
  { name: 'jQuery', icon: <SiJquery />, level: 75 },
  { name: 'Angular', icon: <SiAngular />, level: 60 },
];

function Skills() {
  return (
    <div id="skills" className="skills-section">
      <h2>Skills</h2>
      <div className="skills-grid">
        {skills.map((skill, index) => (
          <div key={index} className="skill-card">
            <span className='icon'>{skill.icon}</span>
            <h3>{skill.name}</h3>
            <div className="skill-bar">
              <div className="skill-level" style={{ width: `${skill.level}%` }} ></div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Skills;