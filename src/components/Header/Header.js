import React from 'react';

import { ResistanceLogo, AddEventButton } from '../';
import styles from './Header.sass';


const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.headerLeftSection}>
        <ResistanceLogo width="250px" />
      </div>
      <div className={styles.headerRightSection}>
        <AddEventButton />
      </div>
    </header>
  );
};

Header.propTypes = {};

export default Header;
