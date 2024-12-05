import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import './Contact.css'
import confetti from 'canvas-confetti'


function Contact(){
  const form = useRef();
  const [mes, setMes] = useState('');

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_jxaryho', 'template_f7ehsiv', form.current, {
        publicKey: '4fmlIbYxlwYmRLloS',
      })
      .then(
        () => {
          // setMes('Successfully sent!!!');
          confetti({
            particleCount:1000,
            spread:1000
          })
          form.current.reset(); // Clear the form fields after submission
        },
        (error) => {
          setMes('Try again..!!!');
        }
      );
  };

  return (
    <div  className="contact-main" id="contact">
      <h2 className="contact-title" >Contact</h2>
      <div className='contact-section'>
        <div className="container">
          <form ref={form} onSubmit={sendEmail}>
            <input type="text" name="form_name" placeholder="Enter your Name" required />
            <input type="email" name="form_email" placeholder="Enter your Email" required />
            <textarea name="message" placeholder="Enter your Message" required />
            <button type="submit">Send</button>
          </form>
          <div className="mes">
            <p>{mes}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Contact;
