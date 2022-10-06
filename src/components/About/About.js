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
          name is Gabriel Chipaya. I will brief you on what made me to choose
          this career path as a developer. Well, basically the love of being in
          a creative space, and the ability to come up with your own ideas, and
          working towards the actual ideas is what made me to go for it.
          However, i am into design especially web design, i am open to work
          with UX/UI designs and graphic designs too. But my main interest is
          being a full stack developer, I want to be flexible with the frontend
          and backend. Solving problems with technology is my goal and I have a
          passion to learn and to get better in the tech industry.
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
