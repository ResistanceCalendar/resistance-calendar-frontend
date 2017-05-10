import React, { PropTypes } from 'react';
import DatePicker from 'react-datepicker';
import moment from 'moment';

import styles from './EventDateFilter.sass';

const EventDateFilter = (props) => {
  const { startDate, updateFilters, placeholderText, isClearable } = props;

  function handleChange(selectedDate) {
    let dateVal = selectedDate;

    if (moment(selectedDate).isSame(moment(), 'day')) {
      dateVal = null;
    }

    updateFilters({ startDate: dateVal });
  }

  return (
    <div className={styles.dateFilterInput}>
      <DatePicker
        dateFormat="ddd MMM D"
        selected={startDate}
        onChange={date => handleChange(date)}
        isClearable={isClearable}
        placeholderText={placeholderText}
        disabledKeyboardNavigation
      />
    </div>
  );
};

EventDateFilter.defaultProps = {
  placeholderText: `TODAY ${moment().format('MMM D')}`,
  isClearable: false
};

EventDateFilter.propTypes = {
  updateFilters: PropTypes.func.isRequired,
  startDate: PropTypes.shape(),  // momentjs object (or null)
  placeholderText: PropTypes.string,
  isClearable: PropTypes.bool
};

export default EventDateFilter;
