import React from 'react';
import { Link } from 'react-router-dom';

import styles from './ThankYou.sass';

const ThankYou = () => {
  return (
    <div className={styles.thankYouWrapper}>
      <h1>Thank you! Your event has been submitted for review.</h1>
      <Link to="/"> View our event listings. </Link>
    </div>
  );
};

export default ThankYou;
