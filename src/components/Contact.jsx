// components/Contact.jsx
import React, { useRef } from 'react';
import emailjs from 'emailjs-com';
import { MdEmail, MdPhone } from 'react-icons/md';
import './Contact.css';

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm(
      'service_hw5nnek',
      'template_stho9qt',
      form.current,
      'KoMRqGRmZQm1EJbYX'
    ).then(
      (result) => {
        alert('Message sent successfully!');
        form.current.reset();
      },
      (error) => {
        alert('Failed to send message. Please try again.');
        console.error(error.text);
      }
    );
  };

  return (
    <div className="section contact-section">
      <h2 className="contact-title">Contact</h2>
      <p className="contact-subheading highlight">Feeling <strong>stressed</strong>, <strong>anxious</strong>, <strong>helpless</strong>, or <strong>unheard</strong>?</p>

      <div className="contact-details">
        <p><MdEmail className="icon" /> <a href="mailto:kalishkalai2003@gmail.com">nithya.psy123@gmail.com</a></p>
         <p><MdPhone className="icon" /> <a href="tel:+918122437971">+91 8122437971</a></p>
      </div>

      <form ref={form} onSubmit={sendEmail} className="contact-form">
        <input type="text" name="from_name" placeholder="Your Name" required className="input-field" />
        <input type="email" name="from_email" placeholder="Your Email" required className="input-field" />
        <textarea name="message" placeholder="Your Message" required className="textarea-field"></textarea>
        <button type="submit" className="send-button">Send Message</button>
      </form>
    </div>
  );
};

export default Contact;
