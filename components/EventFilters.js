import React, { PropTypes } from 'react';

const EventFilters = ({ filters, updateFilters }) => {
  return (
    <div>
      <input
        value={filters.searchText}
        onInput={e => updateFilters({ searchText: e.target.value })}
        placeholder='search'
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
