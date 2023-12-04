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
        duration: 0.3,
        ease: 'linear',
        staggerChildren: 0.01,
      },
    },
  };
  const item = {
    hidden: { opacty: 0, y: -10 },
    show: { opacty: 1, y: 0 },
  };

  return (
    <header>
      <nav className='nav-container'>
        <a className='logo-link-desktop' href='/'>
          <div className='logo-wrapper'>
            <img src='/base-logo-wh-dt.webp' alt='logo-icon' />
          </div>
        </a>

        <div className='contact-wrapper'>
          <a
            className='contact-icon'
            href='https://www.linkedin.com/in/agatabeautylogicclinic/recent-activity/all/'
            aria-label='Link to linkedin'
          >
            <i className='fa-brands fa-linkedin-in' />
          </a>
          <a
            className='contact-icon'
            href='https://www.instagram.com/p/CoFEx07NS2H/'
            aria-label='Link to instagram'
          >
            <i className='fa-brands fa-square-instagram' />
          </a>
          <a
            className='contact-icon'
            href='https://www.facebook.com/SalonKosmetykiiKosmetologiiEstetycznej/'
            aria-label='Link to facebook'
          >
            <i className='fa-brands fa-square-facebook' />
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
            <a className='link' href='/prices'>
              Oferta
            </a>
            <a className='link' href='/shop'>
              Sklep
            </a>
            <a className='link' href='/team'>
              Zespół
            </a>
            <a className='link' href='/#gallery'>
              Galeria
            </a>
            <a className='logo-link-mobile' href='/'>
              <div className='logo-wrapper-mobile'>
                <img src='/base-logo-wh-dt.webp' alt='logo-icon' />
              </div>
            </a>
            <a className='link' href='/blog'>
              Blog
            </a>
            
            <a className='link' href='#contact'>
              Kontakt
            </a>
            <a
              className='link'
              href='https://booksy.com/pl-pl/191015_aloha-beautylogic-clinic_salon-kosmetyczny_4934_olsztyn?do=invite&_branch_match_id=1256892990917705528&utm_medium=merchant_customer_invite&_branch_referrer=H4sIAAAAAAAAA8soKSkottLXT07J0UvKz88urtRLzs%2FV908yz8zPtXANck0CAMIQtnQiAAAA'
            >
              Zarezerwuj wizytę
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
            <motion.a
              variants={item}
              className='link-mobile'
              href='/prices'
              onClick={handleMenuClick}
            >
              Oferta
            </motion.a>
            <motion.a
              variants={item}
              className='link-mobile'
              href='/shop'
              onClick={handleMenuClick}
            >
              Sklep
            </motion.a>
            <motion.a
              variants={item}
              className='link-mobile'
              href='/team'
              onClick={handleMenuClick}
            >
              Zespół
            </motion.a>
            <motion.a
              variants={item}
              className='link-mobile'
              href='/blog'
              onClick={handleMenuClick}
            >
              Blog
            </motion.a>
            
            <motion.a
              variants={item}
              className='link-mobile'
              href='#contact'
              onClick={handleMenuClick}
            >
              Kontakt
            </motion.a>
            <motion.a
              variants={item}
              className='link-mobile'
              href='https://booksy.com/pl-pl/191015_aloha-beautylogic-clinic_salon-kosmetyczny_4934_olsztyn?do=invite&_branch_match_id=1256892990917705528&utm_medium=merchant_customer_invite&_branch_referrer=H4sIAAAAAAAAA8soKSkottLXT07J0UvKz88urtRLzs%2FV908yz8zPtXANck0CAMIQtnQiAAAA'
              onClick={handleMenuClick}
            >
              Zarezerwuj wizytę
            </motion.a>
          </motion.div>
        )}
        <div className='social-icons'>
          <a href='https://www.linkedin.com/in/agatabeautylogicclinic/recent-activity/all/'>
            <i className='fa-brands fa-linkedin-in fa-2x' />
          </a>
          <a href='https://www.instagram.com/p/CoFEx07NS2H/'>
            <i className='fa-brands fa-square-instagram fa-2x' />
          </a>
          <a href='https://www.facebook.com/SalonKosmetykiiKosmetologiiEstetycznej/'>
            <i className='fa-brands fa-square-facebook fa-2x' />
          </a>
        </div>
      </nav>
      {/* <span className='navbar-underline'></span> */}
    </header>
  );
};

export default Header;
