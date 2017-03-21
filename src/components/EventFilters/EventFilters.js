import React, { PropTypes } from 'react';

import { EventSearchInput, EventDateFilter, EventLocationFilter } from '../';
import styles from './EventFilters.sass';


const EventFilters = (props) => {
  const { filters, updateFilters } = props;

  return (
    <section className={styles.filtersBorder}>
      <div className={styles.filtersPanel}>
        <EventSearchInput
          filterInput={filters.searchText}
          updateFilters={updateFilters}
        />
        <EventLocationFilter />
      </div>

      <div className={styles.filtersPanel}>
        <EventDateFilter />
      </div>
    </section>
  );
};

EventFilters.propTypes = {
  filters: PropTypes.shape().isRequired,
  updateFilters: PropTypes.func.isRequired
};

export default EventFilters;
