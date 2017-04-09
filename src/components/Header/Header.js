import React, { PropTypes } from 'react';
import { Link } from 'react-router-dom';

import { ResistanceLogo, AddEventButton } from '../';
import styles from './Header.sass';

function displayAddEventLink(path) {
  if (path !== '/add-event') {
    return <AddEventButton className="add-event-btn" />;
  }

  return null;
}

const Header = (props) => {
  return (
    <header className={styles.header}>
      <div className={styles.headerLeftSection}>
        <Link to="/">
          <ResistanceLogo width="250px" />
        </Link>
      </div>
      <div className={styles.headerRightSection}>
        {displayAddEventLink(props.pathName)}
      </div>
    </header>
  );
};

Header.propTypes = {
  pathName: PropTypes.string.isRequired
};

export default Header;
