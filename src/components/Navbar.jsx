import React, { useState } from 'react';
import { Link } from 'react-scroll';
import './Navbar.css';
import Logo from '../assets/my-logo.png';
import { FaTimes, FaBars } from 'react-icons/fa';
import confetti from 'canvas-confetti'

function Navbar() {
  // const [isLoginOpen, setIsLoginOpen] = useState(false);
  // const [isSignupOpen, setIsSignupOpen] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false); // State to toggle hamburger menu

  // const openLoginModal = () => setIsLoginOpen(true);
  // const closeLoginModal = () => setIsLoginOpen(false);
  // const openSignupModal = () => setIsSignupOpen(true);
  // const closeSignupModal = () => setIsSignupOpen(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen); // Toggle the menu
  const summa= () => {confetti({
    particleCount:1000,
    spread:1000,
    
  })}
  return (
    <div className="nav-container">
      <div className="logo">
        <img src={Logo} alt="Logo" onClick={summa}/>
      </div>

      {/* Hamburger Icon */}
      <div className="hamburger" onClick={toggleMenu}>
        {isMenuOpen ? <FaTimes /> : <FaBars />}
      </div>

      {/* Navbar Links */}
      <nav className={`navbar ${isMenuOpen ? 'active' : ''}`}>
        <ul>
          <li><Link to="home" smooth={true} duration={500}>Home</Link></li>
          <li><Link to="about" smooth={true} duration={500}>About</Link></li>
          <li><Link to="skills" smooth={true} duration={500}>Skills</Link></li>
          <li><Link to="work" smooth={true} duration={500}>Experience</Link></li>
          <li><Link to="projects" smooth={true} duration={500}>Projects</Link></li>
          <li><Link to="contact" smooth={true} duration={500}>Contact</Link></li>
        </ul>
      </nav>

      {/* Buttons */}
      {/* <div className="btn">
        <div className="log">
          <button>Login</button>
        </div>
        <div className="sign">
          <button>Signup</button>
        </div>
      </div> */}

      {/* Login Modal */}
      {/* {isLoginOpen && (
        <div className="modal">
          <div className="modal-content">
            <h2>Login</h2>
            <form>
              <input type="email" placeholder="Email" required />
              <input type="password" placeholder="Password" required />
              <button type="submit">Login</button>
              <button type="button" className="close-btn" onClick={closeLoginModal}>
                <FaTimes />
              </button>
            </form>
          </div>
        </div>
      )} */}

      {/* Signup Modal */}
      {/* {isSignupOpen && (
        <div className="modal">
          <div className="modal-content">
            <h2>Signup</h2>
            <form>
              <input type="text" placeholder="Name" required />
              <input type="email" placeholder="Email" required />
              <input type="password" placeholder="Password" required />
              <button type="submit">Signup</button>
              <button type="button" className="close-btn" onClick={closeSignupModal}>
                <FaTimes />
              </button>
            </form>
          </div>
        </div>
      )} */}
    </div>
  );
}

export default Navbar;
