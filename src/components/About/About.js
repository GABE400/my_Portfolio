import React from 'react';
import './About.css';
import { Link } from 'react-scroll';
import AboutMeIMG from '../../images/man-gabriel.png';

const About = () => {
  return (
    <section className='About' id='about'>
      <div className='about-img'>
        <img src={AboutMeIMG} className='about-me-img' alt='story' />
      </div>

      <div className='about-me-text'>
        <h2>About Me</h2>
        <h5>
          Developer & <span>Designer</span>
        </h5>
        <p>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industrys standard dummy text ever
          since the, when an unknown printer took a galley of type and scrambled
          it to make a type specimen book. It has survived not only five
          centuries, but also the leap into electronic typesetting, remaining
          essentially unchanged.
        </p>
        <Link
          className='button'
          to='experience'
          spy={true}
          smooth={true}
          offset={50}
          duration={500}
          delay={1000}
        >
          Read More
        </Link>
      </div>
    </section>
  );
};

export default About;
