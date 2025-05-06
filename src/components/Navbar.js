import React, { useState } from 'react';
import { NavLink, Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import Flag from 'react-world-flags';
import '../styles/Navbar.css';
import logo from "../images/logoPersonal.png";

const Navbar = () => {
  const { t, i18n } = useTranslation();
  const [isMobile, setIsMobile] = useState(false);

  // Switch between languages
  const switchLanguage = () => {
    if (i18n.language === 'en') i18n.changeLanguage('ru');
    else if (i18n.language === 'ru') i18n.changeLanguage('kg');
    else i18n.changeLanguage('en');
  };

  // Toggle mobile menu
  const toggleMenu = () => {
    setIsMobile(!isMobile);
  };

  // Close menu when a link is clicked
  const closeMenu = () => {
    setIsMobile(false);
  };

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <div className="navbar-logo">
          <Link to="/">
            <img src={logo} alt="Company Logo" />
          </Link>
        </div>
        <div className="hamburger" onClick={toggleMenu}>
          <span className="bar"></span>
          <span className="bar"></span>
          <span className="bar"></span>
        </div>
        <div className={`navbar-right ${isMobile ? 'open' : ''}`}>
          <ul className="navbar-links">
            <li>
              <NavLink
                to="/"
                className={({ isActive }) =>
                  isActive ? 'active-link' : 'link'
                }
                onClick={closeMenu}
              >
                {t('navbar.home')}
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/about"
                className={({ isActive }) =>
                  isActive ? 'active-link' : 'link'
                }
                onClick={closeMenu}
              >
                {t('navbar.about')}
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/myschool"
                className={({ isActive }) =>
                  isActive ? 'active-link' : 'link'
                }
                onClick={closeMenu}
              >
                {t('navbar.myschool')}
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/service"
                className={({ isActive }) =>
                  isActive ? 'active-link' : 'link'
                }
                onClick={closeMenu}
              >
                {t('navbar.service')}
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/testimonials"
                className={({ isActive }) =>
                  isActive ? 'active-link' : 'link'
                }
                onClick={closeMenu}
              >
                {t('navbar.testimonials')}
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/gallery"
                className={({ isActive }) =>
                  isActive ? 'active-link' : 'link'
                }
                onClick={closeMenu}
              >
                {t('navbar.gallery')}
              </NavLink>
            </li>
            
          </ul>
          <div className="vertical-line"></div>
          <a
            href="https://wa.me/60187869497"
            target="_blank"
            rel="noopener noreferrer"
            className="text-us-button"
          >
            {t('navbar.contact')}
          </a>
          <div className="vertical-line"></div>
          <div className="language-switch" onClick={switchLanguage}>
            {i18n.language === 'en' ? (
              <Flag code="US" style={{ width: '35px', cursor: 'pointer' }} />
            ) : i18n.language === 'ru' ? (
              <Flag code="RU" style={{ width: '35px', cursor: 'pointer' }} />
            ) : (
              <Flag code="KG" style={{ width: '35px', cursor: 'pointer' }} />
            )}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
