import React from 'react';
import './Contact.css';
import ScrollToTop from 'react-scroll-to-top';

const Contact = () => {
  return (
    <section className='contact' id='contact'>
      <div className='contact-box'>
        <p className='title'>Hire Me</p>
        <p className='text'>
          Get in touch with me if you want to hire me in your company. I am also
          a freelancer, get in touch with me if you need a Website, Web App or
          Mobile App. Let us connect.
        </p>
        <div className='container-contact'>
          <div className='info'>
            <div className='location'>
              <i className='fa-solid fa-location-dot'></i>
              <p>Lusaka, Zambia</p>
            </div>
            <div className='email'>
              <i className='fa-solid fa-envelope'></i>
              <p>gabechipaya@gmail.com</p>
            </div>
            <div className='contact-phone'>
              <i className='fa-solid fa-phone'></i>
              <p>+260 979 788 911</p>
            </div>
          </div>
          <form
            action='https://formspree.io/f/myyoqdel'
            method='POST'
            className='contact-form'
          >
            <input type='text' placeholder=' Name ' required />
            <input type='email' placeholder=' Email ' required />
            <input type='text' placeholder=' Subject ' required />
            <textarea
              rows='10'
              placeholder=' Your Message '
              required
            ></textarea>
            <button type='submit' value='Submit'>
              Submit
            </button>
          </form>
        </div>
      </div>
      <button className='btnCv' type='submit' value='Submit'>
        Download CV
      </button>
      <ScrollToTop smooth top='20' />
    </section>
  );
};

export default Contact;
