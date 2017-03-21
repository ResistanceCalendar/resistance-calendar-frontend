import React from 'react';

import { FooterLink, Copyright } from '../';
import styles from './Footer.sass';


const FooterLinks = () => {
  return (
    <div>
      <FooterLink url="#" text="Home" />
      <FooterLink url="#" text="Add events" />
      <FooterLink url="#" text="Facebook" />
      <FooterLink url="#" text="Twitter" />
      <FooterLink url="#" text="Privacy Statement" />
    </div>
  );
};

const Footer = () => {
  const year = (new Date()).getFullYear();

  return (
    <footer className={styles.footer}>
      <FooterLinks />
      <Copyright year={year} />
    </footer>
  );
};

Footer.propTypes = {};

export default Footer;
