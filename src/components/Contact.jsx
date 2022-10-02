import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import './styles/ContactUs.css'
import Footer from './Footer'
import { Link } from 'react-router-dom';


export const ContactUs = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_4lxmfbq', 'template_afn7muo', form.current, 'gsBOg-q0c5EHAnEPY')
      .then((result) => {
          console.log(result.text);
          e.target.reset()
      }, (error) => {
          console.log(error.text);
      });
  };

  return (
    <div className='cont-form'>
      <Link to=''>
      <button className='btn-home'>HOME</button>
      </Link>
      <div className='subcont-form'>
    <form ref={form} onSubmit={sendEmail}>
    <h3 className='titleform'>Your data</h3>
      <section className='formname'>
      <label>Name: </label>
      <input type="text" name="user_name" />
      </section>
      <section className='formemail'>
      <label>Email: </label>
      <input type="email" name="user_email" />
      </section>
      <section className='formmessage'>
      <label className='labelmes'>Message: </label>
      <textarea name="message" />
      </section>
      <button className='btn-sbt' type="submit" value="Send">Send</button>
    </form>
    </div>
    <div className='footer-cont'>
    <Footer />
    </div>
    </div>
  );
};