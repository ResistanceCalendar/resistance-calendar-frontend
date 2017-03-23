import React, { PropTypes } from 'react';

import styles from './EventLocationFilter.sass';
import FaMapMarker from 'react-icons/lib/fa/map-marker'

const EventLocationFilter = (props) => {
  const { location, updateFilters } = props;

  return (
    <div className={`float-right ${styles.locationText}`}>
    <FaMapMarker size={32} />
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
