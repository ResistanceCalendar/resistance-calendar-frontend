import React, { PropTypes } from 'react';
import DatePicker from 'react-datepicker';

import styles from './EventDateFilter.sass';

const EventDateFilter = (props) => {
  const { startDate, updateFilters, placeholderText, isClearable } = props;

  return (
    <div className={styles.dateFilterText}>
      <DatePicker
        selected={startDate}
        onChange={date => updateFilters({ startDate: date })}
        isClearable={isClearable}
        placeholderText={placeholderText}
      />
    </div>
  );
};

EventDateFilter.defaultProps = {
  placeholderText: 'Select a date',
  isClearable: true
};

EventDateFilter.propTypes = {
  updateFilters: PropTypes.func.isRequired,
  startDate: PropTypes.shape(),  // momentjs object (or null)
  placeholderText: PropTypes.string,
  isClearable: PropTypes.bool
};

export default EventDateFilter;
