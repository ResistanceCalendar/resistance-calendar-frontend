import React, { PropTypes } from 'react';

import styles from './EventSearchInput.sass';

const EventSearchInput = (props) => {
  return (
    <div className={styles.inputSearchWrapper}>
      <input
        value={props.filterInput}
        onInput={e => props.updateFilters({ searchText: e.target.value })}
        placeholder="Search"
      />
    </div>
  );
};

EventSearchInput.propTypes = {
  updateFilters: PropTypes.func.isRequired,
  filterInput: PropTypes.string.isRequired
};

export default EventSearchInput;
