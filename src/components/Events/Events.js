import React, { Component } from 'react';
import _ from 'lodash';
import moment from 'moment';

import { EventsList, EventFilters, Loading } from '../';
import { eventsAPI } from '../../api';
import styles from './Events.sass';

const odataFilterTypes = ['searchText', 'startDate'];
const nonOdataFiltertypes = ['location', 'range'];

function hasMoreEventsToLoad(currentPage, totalPages) {
  return currentPage + 1 < totalPages;
}

function buildFilterValues(filters, filterTypes) {
  // This looks weird but "pick" builds an object of the appropriate filters, then pickBy removes the falsey properties
  /*
    e.g.
    odataFilterTypes +
    {
      searchText: '',
      location: '90210',
      range: 1000,
      startDate: [[moment object]]
    }
  // returns { startDate: [[moment object]] }
  */
  return _.pickBy(_.pick(filters, filterTypes));
}

class Events extends Component {
  constructor(props) {
    super(props);
    this.state = {
      filters: {
        searchText: '',
        location: null,
        range: null,
        startDate: moment()
      },
      isFetchingEvents: true,
      isFetchingMoreEvents: false,
      events: [],
      hasMoreEvents: true,  // to show/hide "Load More Events" button
      currentPage: 0
    };

    this._getEvents = _.debounce(this.getEvents, 400);
  }

  componentDidMount() {
    this.getEvents();
  }

  getEvents() {
    this.setState({ isFetchingEvents: true });

    const { filters } = this.state;

    // Filter values
    const odataValues = buildFilterValues(filters, odataFilterTypes);
    const nonOdataValues = buildFilterValues(filters, nonOdataFiltertypes);

    eventsAPI.getEvents(nonOdataValues, odataValues)
      .then(res => this.setState({
        events: res._embedded['osdi:events'],
        isFetchingEvents: false,
        hasMoreEvents: hasMoreEventsToLoad(res.page, res.total_pages)
      }))
      .catch(err => {
        console.error(err);
        this.setState({ isFetchingEvents: false });
      });
  }

  loadMoreEvents() {
    const { currentPage, events, filters } = this.state;
    const nextPage = currentPage + 1;

    // Filter values
    const odataValues = buildFilterValues(filters, odataFilterTypes);
    const nonOdataValues = buildFilterValues(filters, nonOdataFiltertypes);

    this.setState({ currentPage: nextPage, isFetchingMoreEvents: true });

    eventsAPI.getEvents({ page: nextPage, ...nonOdataValues }, odataValues)
      .then(res => this.setState({
        events: [...events, ...res._embedded['osdi:events']],
        isFetchingMoreEvents: false,
        hasMoreEvents: hasMoreEventsToLoad(res.page, res.total_pages)
      }))
      .catch(err => {
        this.setState({ isFetchingMoreEvents: false });
        console.error(err);
      });
  }

  updateFilters(updatedFilters) {
    this.setState({
      filters: {
        ...this.state.filters,
        ...updatedFilters
      }
    }, () => {
      // After state update, fetch events (via debounced function to prevent rapid service calls)
      this._getEvents();
    });
  }

  renderEventsList(events, hasMoreEvents, isFetchingMoreEvents, filters) {
    return (
      <div>
        <EventsList events={events} filters={filters} />
        { hasMoreEvents &&
          <div className={styles.loadMoreBtn}>
            { isFetchingMoreEvents ?
              <Loading /> :
              <button type="button" onClick={this.loadMoreEvents.bind(this)}>
                load more events
              </button>
            }
          </div>
        }
      </div>
    );
  }

  render() {
    const {
      filters,
      events,
      isFetchingEvents,
      isFetchingMoreEvents,
      hasMoreEvents
    } = this.state;

    return (
      <div className={styles.container}>
        <div className={styles.filtersWrapper}>
          <EventFilters
            filters={filters}
            updateFilters={this.updateFilters.bind(this)}
          />
        </div>
        { isFetchingEvents ?
          <div className={styles.loadingMoreEventsWrapper}><Loading /></div> :
          this.renderEventsList(events, hasMoreEvents, isFetchingMoreEvents, filters)
        }
      </div>
    );
  }
}

Events.propTypes = {};

export default Events;
