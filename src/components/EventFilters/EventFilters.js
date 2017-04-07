import React, { PropTypes } from 'react';

import { EventSearchInput, EventDateFilter, EventLocationFilter } from '../';
import styles from './EventFilters.sass';


const EventFilters = (props) => {
  const { filters, updateFilters } = props;

  return (
    <section className={styles.filtersBorder}>
      <div className={styles.eventSearchInput}>
        <EventSearchInput
          filterInput={filters.searchText}
          updateFilters={updateFilters}
        />
      </div>
      <div className={styles.eventLocationFilter}>
        <EventLocationFilter updateFilters={updateFilters} />
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
  updateFilters: PropTypes.func.isRequired
};

export default EventFilters;
