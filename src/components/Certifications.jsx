// components/Certifications.jsx
import React from 'react';

const Certifications = () => {
  const certifications = [
    {
      title: 'Career Counselling',
      issuer: 'IIT Madras Pravartak & Bodhbridge',
      icon: '🎯',
    },
    {
      title: 'CBT Practitioner Training',
      issuer: 'Udemy',
      icon: '🧠',
    },
    {
      title: 'Suicide Prevention Counselling',
      issuer: 'ZeroSuicide Institute',
      icon: '🛡️',
    },
  ];

  return (
    <div className="section">
      <h2>Certifications</h2>
      <div style={{
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'center',
        gap: '20px',
        marginTop: '20px'
      }}>
        {certifications.map((cert, index) => (
          <div
            key={index}
            style={{
              width: '250px',
              padding: '20px',
              borderRadius: '12px',
              backgroundColor: '#fff',
              boxShadow: '0 4px 8px rgba(0,0,0,0.1)',
              transition: 'transform 0.3s ease',
            }}
            onMouseEnter={e => e.currentTarget.style.transform = 'scale(1.05)'}
            onMouseLeave={e => e.currentTarget.style.transform = 'scale(1)'}
          >
            <div style={{ fontSize: '2rem' }}>{cert.icon}</div>
            <h4 style={{ margin: '10px 0 5px', color: '#2c3e50' }}>{cert.title}</h4>
            <p style={{ fontSize: '0.95rem', color: '#666' }}>{cert.issuer}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Certifications;
