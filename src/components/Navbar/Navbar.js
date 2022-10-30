import React, { useState, useEffect } from 'react';
import { Link } from 'react-scroll';
import './Navbar.css';
import LogoPNG from '../../images/Logo/g.png';

const Navbar = () => {
  const [isMobile, setIsMobile] = useState(false);

  //change color when scrolling
  const [navbar, setNavbar] = useState(false);

  const changeBackground = () => {
    if (window.scrollY >= 75) {
      setNavbar(true);
    } else {
      setNavbar(false);
    }
  };

  useEffect(() => {
    // adding the event when scroll change background
    window.addEventListener('scroll', changeBackground);

    return () => {
      window.removeEventListener('scroll', changeBackground);
    };
  }, []);

  return (
    <nav className={navbar ? 'navbar active' : 'navbar'}>
      <div>
        <img src={LogoPNG} className='logo' alt='logo' />
      </div>
      <ul
        className={isMobile ? 'nav-links-mobile' : 'nav-links'}
        onClick={() => setIsMobile(false)}
      >
        <li className='links active'>
          <Link
            to='home'
            spy={true}
            smooth={true}
            offset={50}
            duration={500}
            delay={1000}
          >
            Home
          </Link>
        </li>
        <li className='links'>
          <Link
            to='about'
            spy={true}
            smooth={true}
            offset={50}
            duration={500}
            delay={1000}
          >
            About Me
          </Link>
        </li>
        <li className='links'>
          <Link
            to='experience'
            spy={true}
            smooth={true}
            offset={50}
            duration={500}
            delay={1000}
          >
            Experience
          </Link>
        </li>
        <li className='links'>
          <Link
            to='projects'
            spy={true}
            smooth={true}
            offset={50}
            duration={500}
            delay={1000}
          >
            Projects
          </Link>
        </li>
        <li className='links'>
          <Link
            to='contact'
            spy={true}
            smooth={true}
            offset={50}
            duration={500}
            delay={1000}
          >
            Hire Me
          </Link>
        </li>
      </ul>
      <button
        className='mobile-menu-icon'
        onClick={() => setIsMobile(!isMobile)}
      >
        {isMobile ? (
          <i className='fas fa-times'></i>
        ) : (
          <i className='fas fa-bars'></i>
        )}
      </button>
    </nav>
  );
};

export default Navbar;
