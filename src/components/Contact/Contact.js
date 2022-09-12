import React from 'react';
import './Contact.css';
import ScrollToTop from 'react-scroll-to-top';

const Contact = () => {
  return (
    <section className='contact' id='contact'>
      <div className='contact-box'>
        <p className='title'>Hire Me</p>
        <p className='text'>
          It is a long established fact that a reader will be distracted by the
          readable content of a page when looking at its layout. The point of
          using Lorem Ipsum is that it has a more-or-less normal distribution of
          letters, as opposed to using 'Content here, content here', making it
          look like readable English.
        </p>
        <div className='container-contact'>
          <div className='info'>
            <div className='location'>
              <i className='fa-solid fa-location-dot'></i>
              <p>House No. 1890, Street No. 45Rz, City Blocks</p>
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
      <ScrollToTop smooth top='20' />
    </section>
  );
};

export default Contact;
