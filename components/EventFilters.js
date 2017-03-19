import React, { Component, PropTypes } from 'react';
import EventSearchInput from './EventSearchInput';
import EventDateFilter from './EventDateFilter';
import EventLocationFilter from './EventLocationFilter';

const FiltersWrapper = (props) => {
  return (
    <section className='filters-border'>
      { props.children }
      <style jsx>
        {`
          .filters-border {
            border: solid 2px var(--main-medium-gray);
          }
        `}
      </style>
    </section>
  );
};

const FiltersPanel = (props) => {
  return (
    <div className='filters-panel'>
      { props.children }
      <style jsx>
        {`
          .filters-panel {

          }
        `}
      </style>
    </div>
  );
};

export default class EventFilters extends Component {
  render () {
    const { filters, updateFilters } = this.props;
    return (
      <FiltersWrapper>
        <FiltersPanel>
          <EventSearchInput
            filterInput={filters.searchText}
            updateFilters={updateFilters} />
          <EventLocationFilter />
        </FiltersPanel>
        <FiltersPanel>
          <EventDateFilter />
        </FiltersPanel>
      </FiltersWrapper>
    );
  }
}

EventFilters.propTypes = {
  filters: PropTypes.shape().isRequired,
  updateFilters: PropTypes.func.isRequired
};
