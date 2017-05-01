import React from 'react';
import { Link } from 'react-router-dom';

import { Copyright } from '../';
import styles from './Footer.sass';


function footerLinks() {
  /* eslint-disable jsx-a11y/href-no-hash */
  return (
    <div className={styles.linksWrapper}>
      <Link to="/">Home</Link>
      <a
        href="https://www.facebook.com/resistancecalendar"
        target="_blank"
        rel="noopener noreferrer"
      >
        Facebook
      </a>
      <a
        href="https://twitter.com/ResistCalendar"
        target="_blank"
        rel="noopener noreferrer"
      >
        Twitter
      </a>
      <Link to="/privacy-policy">Privacy Policy</Link>
    </div>
  );
  /* eslint-enable jsx-a11y/href-no-hash */
}

const Footer = () => {
  const year = (new Date()).getFullYear();

  return (
    <footer className={styles.footer}>
      {footerLinks()}
      <Copyright year={year} />
    </footer>
  );
};

Footer.propTypes = {};

export default Footer;
