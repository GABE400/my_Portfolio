import React from 'react';
import './Experience.css';
import OnePng from '../../images/img/01.png';
import TwoPng from '../../images/img/02.png';
import ThreePng from '../../images/img/3.png';
import FourPng from '../../images/img/04.png';
import FivePng from '../../images/img/05.png';
import SixPng from '../../images/img/06.png';
import { Link } from 'react-scroll';

const Experience = () => {
  return (
    <section className='experience' id='experience'>
      <h1>Experience</h1>
      <h2>Skills in</h2>
      <div className='services-container'>
        <div className='imgTech'>
          <img src={OnePng} alt='css' />
        </div>
        <div className='imgTech'>
          <img src={TwoPng} alt='html' />
        </div>
        <div className='imgTech'>
          <img src={ThreePng} alt='react' />
        </div>
        <div className='imgTech'>
          <img src={FourPng} alt='javaScript' />
        </div>
        <div className='imgTech'>
          <img src={FivePng} alt='java' />
        </div>
        <div className='imgTech'>
          <img src={SixPng} alt='Android' />
        </div>
      </div>

      <Link
        className='button'
        to='contact'
        spy={true}
        smooth={true}
        offset={50}
        duration={500}
        delay={1000}
      >
        Hire Me
      </Link>
    </section>
  );
};

export default Experience;
