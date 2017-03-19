import React, { PropTypes } from 'react';
import EventSearchInput from './EventSearchInput';

const EventFilters = ({ filters, updateFilters }) => {
  return (
    <div>
      <EventSearchInput
        filterInput={filters.searchText}
        updateFilters={updateFilters}
      />
      <div>Date filter placeholder</div>
      <div>Location filter placeholder</div>
      <style jsx>{``}</style>
    </div>
  );
};

EventFilters.propTypes = {
  filters: PropTypes.shape().isRequired,
  updateFilters: PropTypes.func.isRequired
};

export default EventFilters;
