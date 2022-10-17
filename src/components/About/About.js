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
          Thank you for visiting my portfolio. My name is Gabriel Chipaya and I
          am a software developer. My expertise are designing and development of
          Desktop Apps, Web Apps, and Mobile Apps. I have a Bachelor of Science
          (Hons) degree in Computing, which has given me adequate knowledge
          about the frontend and backend development. My goal is solving
          problems with technology. I am a team player with a passion to learn.
          Let me brief you on what made me to choose this career path as a
          developer, I have always been a creative person who loves being in a
          creative space, I have always wanted to come up with my own ideas to
          turn my imagination to reality.
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
