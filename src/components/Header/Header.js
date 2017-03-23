import React from 'react';
import { Link } from 'react-router-dom';

import { ResistanceLogo, AddEventButton } from '../';
import styles from './Header.sass';


const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.headerLeftSection}>
        <Link to="/">
          <ResistanceLogo width="250px" />
        </Link>
      </div>
      <div className={styles.headerRightSection}>
        <AddEventButton />
      </div>
    </header>
  );
};

Header.propTypes = {};

export default Header;
