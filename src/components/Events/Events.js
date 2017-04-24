import React, { Component } from 'react';
import _ from 'lodash';
import moment from 'moment';

import { EventsList, EventFilters, Loading } from '../';
import { eventsAPI } from '../../api';
import { distanceRange, defaultRangeIndex } from '../EventLocationFilter/EventLocationFilter';
import styles from './Events.sass';

const odataFilterTypes = ['searchText', 'startDate'];
const nonOdataFiltertypes = ['location', 'range', 'geoLocation'];

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
      geoLocation: {
        lat: null,
        long: null,
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
    this.getPosition().then(() => this.getEvents());
  }

  getPosition() {
    return new Promise((resolve) => {
      if (!window.navigator.geolocation) { resolve(); }
      window.navigator.geolocation.getCurrentPosition((pos) => {
        this.setState({
          geoLocation: {
            lat: pos.coords.latitude,
            long: pos.coords.longitude,
            maxDistance: distanceRange[defaultRangeIndex].value,
          }
        }, resolve);
      });
    });
  }

  getEvents() {
    this.setState({ isFetchingEvents: true });

    // Make sure at top of window to properly show loading icon and no-results messages
    window.scrollTo(0, 0);

    // Filter values
    const { filters, geoLocation } = this.state;
    const mergedFilters = Object.assign(filters, { geoLocation });
    const odataValues = buildFilterValues(mergedFilters, odataFilterTypes);
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
      geoLocation,
      hasMoreEvents
    } = this.state;

    return (
      <div className={styles.container}>
        <div className={styles.filtersWrapper}>
          <EventFilters
            filters={filters}
            geoLocation={geoLocation}
            disableGeoLocation={() => this.setState({ geoLocation: {} })}
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
