import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope, faAngleLeft, faAngleRight } from '@fortawesome/free-solid-svg-icons';

import './Home.css';
import './App.css';

function Introduction() {
const [showContacts, setShowContacts] = useState(false);

  const handleContactClick = () => {
    setShowContacts(prevShowContacts => !prevShowContacts);
  };


  return (
    <div className="home">
  <div className="introduction">
    <div className="content-container">
      <div className="text-container">
        <p>Hi, I am</p>
        <h1>Swathi Asokraj</h1>
        <p style={{ textAlign: 'justify' }}>
          A versatile software developer with expertise in web development, machine learning, and a keen interest in deep learning and computer vision.
        </p>
        <br></br>
        <h4>Let's transform ideas into immersive experiences together.</h4>
        <div className="contact-container">
          <Button 
            style={{ backgroundColor: "transparent", border: "2px solid #3c3f58", color: "#3c3f58" }}
            onClick={handleContactClick}
          >
            Contact Me {showContacts ? <FontAwesomeIcon icon={faAngleLeft} /> : <FontAwesomeIcon icon={faAngleRight} />}
          </Button>
          {showContacts && (
            <div className="contact-icons">
              <a className="contact-link" href="https://github.com/swathiasok">
                <FontAwesomeIcon icon={faGithub} className="contact-icon" />
              </a>
              <a className="contact-link" href="https://www.linkedin.com/in/swathi-asok/">
                <FontAwesomeIcon icon={faLinkedin} className="contact-icon" />
              </a>
              <a className="contact-link" href="mailto:swathiasok14@gmail.com">
                <FontAwesomeIcon icon={faEnvelope} className="contact-icon" />
              </a>
            </div>
          )}
        </div>
      </div>
      <div className="image-container">
        <img src={process.env.PUBLIC_URL + '/images/intro.jpg'} alt="Swathi Asokraj" className="profile-image" />
      </div>
    </div>
  </div>
</div>
  );
}

export default Introduction;
