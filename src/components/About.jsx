// components/About.jsx
import React from 'react';
import aboutImage from '../assets/images/profile.png';

const About = () => {
  return (
    <div className="section" id="container">
      <div className="about-content">
        <img src={aboutImage} alt="Nithya P.K." className="about-image" />
        <div className="about-text">
          <h2>Nithya p.k</h2>
          <p><strong>Counselling Psychologist</strong></p>
          <ul>
            <li>Consultant at Chennai Counselling Services, Chennai</li>
            <li>M.A. (Psychology), specialized in Counselling – IGNOU</li>
            <li>PG Diploma in Counselling and Psychotherapy – Chennai Counselling Services Academy</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default About;



