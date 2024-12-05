import React from 'react';
import './Home.css';
import ResumePDF from '../assets/Aravind_resume.pdf';
import Video from '../assets/12479108_3840_2160_24fps.mp4';

function Home() {
  return (
    <div className="home-section">
      <div className="video-background">
        <video src={Video} autoPlay loop muted></video>
      </div>
      <div className="home-content">
        <div className="home-text">
          <h1 className="name-role">I'm Aravind</h1>
          <h2 className="name-role">Full Stack Developer</h2>
          <div className="resume">
            <a href={ResumePDF} download>
              <button>Download Resume</button>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
