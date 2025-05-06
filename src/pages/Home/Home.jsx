import React, { useEffect } from "react";
import { useTranslation } from 'react-i18next';
import './Home.css'; 
import AOS from "aos";
import 'aos/dist/aos.css'; 
import Avatar from "../../images/avatar.png";

const Home = () => {
  const { t } = useTranslation();

  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []); 

  return (
    <>
      <div className="container">
        <div className="hero-pic">
          <img src={Avatar} alt="profile pic" data-aos="fade-right" />
        </div>
        <div className="hero-text" data-aos="fade-left">
          <h5>
              {t('home.intro')} <span className="input"></span>
          </h5>
          <h1>MR. Almanbet</h1>
          <p>{t('home.description')}</p>
        </div>
      </div>
    </>
  );
};

export default Home;

