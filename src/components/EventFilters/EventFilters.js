import React, { PropTypes } from 'react';

import { EventSearchInput, EventDateFilter, EventLocationFilter } from '../';
import styles from './EventFilters.sass';


const EventFilters = (props) => {
  const { filters, updateFilters, disableGeoLocation, geoLocation } = props;

  return (
    <section className={styles.filtersBorder}>
      <div className={styles.eventSearchInput}>
        <EventSearchInput
          filterInput={filters.searchText}
          updateFilters={updateFilters}
        />
      </div>
      <div className={styles.eventLocationFilter}>
        <EventLocationFilter
          updateFilters={updateFilters}
          disableGeoLocation={disableGeoLocation}
          geoLocation={geoLocation}
        />
      </div>
      <div className={styles.eventDateFilter}>
        <EventDateFilter
          startDate={filters.startDate}
          updateFilters={updateFilters}
          className={styles.eventDateFilter}
        />
      </div>
    </section>
  );
};

EventFilters.propTypes = {
  filters: PropTypes.shape().isRequired,
  geoLocation: PropTypes.shape(),
  disableGeoLocation: PropTypes.func,
  updateFilters: PropTypes.func.isRequired
};

export default EventFilters;
