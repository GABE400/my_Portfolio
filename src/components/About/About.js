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
          Fullstack <span>Developer</span>
        </h5>
        <p>
          Thank you for visiting my portfolio. I am a full stack developer, my
          name is Gabriel Chipaya. My expertise is Web App and Mobile App
          development, and i am open to work with UX/UI designs, Web designs and
          graphic designs. I am flexible with the frontend and backend, my goal
          is solving problems with technology and I have a passion to learn and
          I am a team player. Let me brief you on what made me to choose this
          career path as a developer. I have always been a creative person, I
          loved being in a creative space, I have always wanted to come up with
          my own ideas to turn my imagination to reality.
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
          Scroll Down
        </Link>
      </div>
    </section>
  );
};

export default About;
