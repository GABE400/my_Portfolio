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
          Thank you for visiting my portfolio, my name is Gabriel Chipaya. I am
          a full stack developer. The reason why i chose to take this career
          path as a developer is basically the love of being in a creative space
          and that is known as my hobby. However, i am into design especially
          web design, i am open to work with UX/UI designs and graphic designs
          too. But my main area is being a full stack developer that is flexible
          with the frontend and backend. I love solving problems with
          technology, I have a computing greenwhich degree with honours, I went
          to a tier 1 university. The university of ZCAS collaborates with the
          university of greenwhich.
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
