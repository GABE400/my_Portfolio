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
                <p>
                  I am a full stack developer. This means in development of a
                  Website, Progressive Web App, Web Application, Desktop
                  Application and Mobile Application. I can work with the
                  frontend or the backend or i can work with both. Find out more
                  about me..
                </p>
                <Link
                  to='about'
                  spy={true}
                  smooth={true}
                  offset={50}
                  duration={500}
                  delay={1000}
                  className='btnClick'
                >
                  <li>Get Started</li>
                </Link>
              </div>
              <div className='socialMedia'>
                <ul>
                  <li>
                    <a href='/'>
                      <i className='fab fa-facebook-f'></i>
                      <span>Facebook</span>
                    </a>
                  </li>
                  <li>
                    <a href='/'>
                      <i className='fab fa-instagram'></i>
                      <span>Instagram</span>
                    </a>
                  </li>
                  <li>
                    <a href='/'>
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
                      <span>My CV</span>
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
