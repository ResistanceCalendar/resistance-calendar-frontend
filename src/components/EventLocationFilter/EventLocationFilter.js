import React, { PropTypes } from 'react';

import styles from './EventLocationFilter.sass';

const EventLocationFilter = (props) => {
  const { location, updateFilters } = props;

  return (
    <div className={`float-right ${styles.locationText}`}>
      <input
        type="text"
        name="location"
        value={location}
        onChange={e => updateFilters({ location: e.target.value })}
        placeholder="Set a location"
      />
    </div>
  );
};

EventLocationFilter.propTypes = {
  updateFilters: PropTypes.func.isRequired,
  location: PropTypes.string.isRequired
};

export default EventLocationFilter;
