import React from 'react';
import { useTranslation } from 'react-i18next';
import '../About/About.css';

const About = () => {
  const { t } = useTranslation();
  const timelineData = t('timeline', { returnObjects: true });

  return (
    <div className="story-container">
      <div className="story-header">{t('about.our_story')}</div>
      <div className="timeline">
       
          <div  className="timeline-item">
            <div className="timeline-dot" />
            <div className="timeline-content">
              <span className="timeline-date">{t('about.year')} </span>
              <h3 className="timeline-title">{t('about.date')} </h3>
              <p className="timeline-text">{t('about.title')} </p>
              <div className="timeline-year">{t('about.content')} </div>
            </div>
          </div>
          <div  className="timeline-item">
            <div className="timeline-dot" />
            <div className="timeline-content">
              <span className="timeline-date">{t('about.year')} </span>
              <h3 className="timeline-title">{t('about.date')} </h3>
              <p className="timeline-text">{t('about.title')} </p>
              <div className="timeline-year">{t('about.content')} </div>
            </div>
          </div>
          <div  className="timeline-item">
            <div className="timeline-dot" />
            <div className="timeline-content">
              <span className="timeline-date">{t('about.year')} </span>
              <h3 className="timeline-title">{t('about.date')} </h3>
              <p className="timeline-text">{t('about.title')} </p>
              <div className="timeline-year">{t('about.content')} </div>
            </div>
          </div>
          

      </div>
    </div>
  );
};

export default About;
