import React, { PropTypes, Component } from 'react';
import FaSearch from 'react-icons/lib/fa/search';

import styles from './EventSearchInput.sass';

class EventSearchInput extends Component {
  isMobile() {
    if (!navigator && navigator.userAgent) { return }

    return navigator.userAgent.match(/iPhone|Android|iPad|iPod/i)
  }

  componentDidMount() {
    if(!this.isMobile()) { this.input.focus(); }
  }

  render() {
    const { filterInput, updateFilters } = this.props;

    return (
      <div className={styles.inputSearchWrapper}>
        <FaSearch size={18} />
        <input
          value={filterInput}
          ref={node => this.input = node}
          onInput={e => updateFilters({ searchText: e.target.value })}
          placeholder="Search"
        />
      </div>
    );
  }
}

EventSearchInput.propTypes = {
  updateFilters: PropTypes.func.isRequired,
  filterInput: PropTypes.string.isRequired
};

export default EventSearchInput;
