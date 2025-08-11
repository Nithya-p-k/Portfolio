// components/Home.jsx
import React from 'react';


const Home = () => {
  return (
    <div className="section home">
      <div className="content-wrapper">
        <h2>Welcome</h2>
        <p>You're not alone. I'm here to help you navigate through.</p>
        <button onClick={() => document.getElementById('contact').scrollIntoView({ behavior: 'smooth' })}>
          Start Your Healing..
        </button>
      </div>
    </div>
  );
};

export default Home;
