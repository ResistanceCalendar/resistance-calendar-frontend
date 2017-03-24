import React from 'react';
import { Link } from 'react-router-dom';

import { Copyright } from '../';
import styles from './Footer.sass';


function footerLinks() {
  /* eslint-disable jsx-a11y/href-no-hash */
  return (
    <div className={styles.linksWrapper}>
      <Link to="/">Home</Link>
      <Link to="/add-event">Add Events</Link>
      <a href="#">Facebook</a>
      <a href="#">Twitter</a>
      <a href="#">Privacy Statement</a>
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
