import React from 'react';

import styles from './EventLocationFilter.sass';

const EventLocationFilter = () => {
  return (
    <div className={`float-right ${styles.locationText}`}>
      FILTER BY LOCATION
    </div>
  );
};

EventLocationFilter.propTypes = {};

export default EventLocationFilter;
