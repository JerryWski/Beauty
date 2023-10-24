import React, { useState, useEffect } from 'react';
import './Header.css';
import { useMediaQuery } from '../../utils/useMediaQuery';
import { motion, AnimatePresence } from 'framer-motion';

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
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        delayChildren: 0.5
      }
    }
  }




  return (
    <header>
      <nav className='nav-container'>
        <div className='logo-container'>
          <a href='/'>
            <div className='aloha-logo-wrapper'>
              <img src='' alt='logo-icon' />
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
                width: toggle ? 34 : 30,
              }}
              className='burger-line'
            ></motion.span>
          </div>
        )}
        {toggle && !matches && (
          <AnimatePresence>
            <motion.div
              animate={{ opacity: 1, y: 0 }}
              transition={{ ease: 'linear', duration: .5}}
              initial={{ opacity: 0, y: -90 }}
              exit={{ opacity: 0 }}
              className='nav-links-mobile'
            >
              <motion.a
                initial={{ opacity: 0.6}}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.1 }}
                className='link-mobile'
                href=''
              >
                O Nas
              </motion.a>
              <motion.a
                initial={{ opacity: 0.6}}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.2 }}
                className='link-mobile'
                href=''
              >
                Cennik
              </motion.a>
              <motion.a
                initial={{ opacity: 0.6}}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.3 }}
                className='link-mobile'
                href=''
              >
                Blog
              </motion.a>
              <motion.a
                initial={{ opacity: 0.6}}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.4 }}
                className='link-mobile'
                href=''
              >
                Sklep
              </motion.a>
              <motion.a
                initial={{ opacity: 0.6}}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5 }}
                className='link-mobile'
                href='#contact'
                onClick={handleMenuClick}
              >
                Kontakt
              </motion.a>
            </motion.div>
          </AnimatePresence>
        )}
      </nav>
    </header>
  );
};

export default Header;
