// src/App.jsx
import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Home from './components/Home';
import About from './components/About';
import Certifications from './components/Certifications';
import Services from './components/Services';
import Contact from './components/Contact';

function App() {
  return (
    <div>
      <Navbar />
      <section id="home"  style={{ marginTop: '80px', marginBottom: '60px' }}><Home /></section>
      <section id="about" style={{ marginBottom: '60px' }}><About /></section>
      <section id="certifications" style={{ marginBottom: '90px' }}><Certifications /></section>
      <section id="services" style={{ marginBottom: '60px' }}><Services /></section>
      <section id="contact"><Contact /></section>
    </div>
  );
}

export default App;
