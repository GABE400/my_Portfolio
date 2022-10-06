import React from 'react';
import { Link } from 'react-scroll';
import './Header.css';
import ShapePng from '../../images/shape.png';
import Chair from '../../images/chair.png';
import MePng from '../../images/imgMeGB4.png';
import LaptopPng from '../../images/laptop.png';
import Typewriter from 'typewriter-effect';
import Navbar from '../Navbar/Navbar';

const Header = () => {
  return (
    <header id='home'>
      <div className='header-container'>
        <Navbar />
        <div className='container'>
          <div className='row'>
            <div className='column-right'>
              <div className='details'>
                <h1>
                  Hi, my name is
                  <span>
                    <Typewriter
                      options={{
                        autoStart: true,
                        loop: true,
                        delay: 80,
                        strings: ['Gabriel Chipaya'],
                      }}
                    />
                  </span>
                </h1>
                <h3> I Am A Fullstack Developer </h3>

                <Link
                  to='about'
                  spy={true}
                  smooth={true}
                  offset={50}
                  duration={500}
                  delay={1000}
                  className='scroll-icon ex-1'
                >
                  <div className='mouse'></div>
                </Link>

                <p>Scroll Down</p>
              </div>
              <div className='socialMedia'>
                <ul>
                  <li>
                    <a href='https://www.facebook.com/GabbyChipaya'>
                      <i className='fab fa-facebook-f'></i>
                      <span>Facebook</span>
                    </a>
                  </li>
                  <li>
                    <a href='https://www.instagram.com/chipayagabriel/'>
                      <i className='fab fa-instagram'></i>
                      <span>Instagram</span>
                    </a>
                  </li>
                  <li>
                    <a href='https://github.com/GABE400?tab=repositories'>
                      <i className='fab fa-github'></i>
                      <span>Github</span>
                    </a>
                  </li>
                  <li>
                    <a href='/'>
                      <i className='fab fa-whatsapp'></i>
                      <span>Whatsapp</span>
                    </a>
                  </li>
                  <li>
                    <a href='/'>
                      <i className='fa fa-download'></i>
                      <span>Resume</span>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div className='column-left'>
              <div className='profileImages'>
                <img src={ShapePng} className='shape' alt='shape' />
                <img src={Chair} className='chair' alt='chair' />
                <img src={MePng} className='gabe' alt='gabriel' />
                <img src={LaptopPng} className='laptop' alt='laptop' />
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
