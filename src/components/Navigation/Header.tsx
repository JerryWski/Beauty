import React, { useState, useEffect } from 'react';
import './Header.css';
import { useMediaQuery } from '../../utils/useMediaQuery';
import { motion } from 'framer-motion';


const Header: React.FC = () => {
  const [toggle, setToggle] = useState(false);
  const [menuClicked, setMenuClicked] = useState(false);
  const matches = useMediaQuery('(min-width: 900px)');

  const handleMenuClick = () => {
    if (matches) {
      return;
    }
    setToggle(false);
    setMenuClicked(true);
  };

  // overflow hidden check is toggle is true
  useEffect(() => {
    if (toggle) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
  }, [toggle]);

  //animatons
  const container = {
    hidden: { opacity: 0, y: -30 },
    show: {
      opacity: 1,
      y: 0,
      transition: {
        duration: .3,
        ease: 'linear',
        staggerChildren: 0.01,
      },
    },
  };
  const item = {
    hidden: { opacty: 0, y: -10},
    show: { opacty: 1, y: 0},
  };

  return (
    <header>
      <nav className='nav-container'>
        <div className='logo-container'>
          <a href='/'>
            <div className='logo-wrapper'>
              <img src='../../src/assets/base_logo_2.png'alt='logo-icon' />
            </div>
          </a>
        </div>
        <div className='contact-wrapper'>
          <a
            className='contact-icon'
            href='mailto:kontakt@maciejmartowicz.pl'
            aria-label='Link to email'
          >
            <i className='fa-solid fa-envelope'></i>
          </a>
          <a
            className='contact-icon'
            href='tel:+48602649588'
            aria-label='Link to phone'
          >
            <i className='fa-solid fa-phone'></i>
          </a>
        </div>
        {/* check if we are on mobile or not */}
        {matches && (
          <div className='nav-links'>
            <a className='link' href='/about'>
              O Nas
            </a>
            <a className='link' href='/offers'>
              Cennik
            </a>
            <a className='link' href='/blog'>
              Galeria
            </a>
            <a className='link' href='#contact'>
              Blog
            </a>
            <a className='link' href='#contact'>
              Sklep
            </a>
            <a className='link' href='#contact'>
              Kontakt
            </a>
          </div>
        )}

        {!matches && (
          <div
            onClick={() => setToggle((prevToggle) => !prevToggle)}
            className='hamburger'
          >
            <motion.span
              animate={{ rotateZ: toggle ? 45 : 0, y: toggle ? 8 : 0 }}
              className='burger-line'
            ></motion.span>
            <motion.span
              animate={{ width: toggle ? 0 : 32 }}
              className='burger-line'
            ></motion.span>
            <motion.span
              animate={{
                rotateZ: toggle ? -45 : 0,
                y: toggle ? -8 : 0,
                width: toggle ? 34 : 28,
              }}
              className='burger-line'
            ></motion.span>
          </div>
        )}
        {toggle && !matches && (
          <motion.div
            variants={container}
            initial='hidden'
            animate='show'
            exit={{ opacity: 0 }}
            className='nav-links-mobile'
          >
            <motion.a variants={item} className='link-mobile' href=''>
              O Nas
            </motion.a>
            <motion.a variants={item} className='link-mobile' href=''>
              Cennik
            </motion.a>
            <motion.a variants={item} className='link-mobile' href=''>
              Blog
            </motion.a>
            <motion.a variants={item} className='link-mobile' href=''>
              Sklep
            </motion.a>
            <motion.a
              variants={item}
              className='link-mobile'
              href='#contact'
              onClick={handleMenuClick}
            >
              Kontakt
            </motion.a>
          </motion.div>
        )}
      </nav>
    </header>
  );
};

export default Header;
