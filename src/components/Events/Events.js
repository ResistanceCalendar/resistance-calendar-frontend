import React, { Component, PropTypes } from 'react';
import _ from 'lodash';
import moment from 'moment';
import queryString from 'query-string';

import { EventsList, EventFilters, Loading } from '../';
import { eventsAPI } from '../../api';
import { dateTimeUtils } from '../../utils';
import { eventsStorage } from '../../services';
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

    // convert query string to object
    const parsedQueryString = queryString.parse(this.props.location.search);

    this.state = {
      filters: {
        searchText: parsedQueryString.searchText || '',
        location: parsedQueryString.location || null,
        range: parseInt(parsedQueryString.range, 10) || distanceRange[defaultRangeIndex].value,
        startDate: moment(parsedQueryString.startDate),  // if undefined, will create an object representing today
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
    this._updateQueryString = _.debounce(this.updateQueryString, 400);
  }

  async componentDidMount() {
    const { location, range } = this.state.filters;

    // Fetch cache and see if it has anything, otherwise fetch fresh events from server
    const eventsCache = eventsStorage.getEventsStorage();

    if (eventsCache.events.length) {
      this.setState({
        events: eventsCache.events,
        hasMoreEvents: eventsCache.hasMoreEvents,
        currentPage: eventsCache.currentPage,
        isFetchingEvents: false
      }, () => {
        window.scrollTo(0, window.document.body.scrollHeight);
      });
    } else {
      // No need to look up location if query string is dictating location
      if (!location || !range) {
        await this.getPosition();
      }

      this.getEvents();
    }
  }

  getPosition() {
    return new Promise((resolve) => {
      if (!window.navigator.geolocation) { resolve(); }

      window.navigator.geolocation.getCurrentPosition((pos) => {
        // Look up zipcode based on lat/long
        eventsAPI.getZipcode(pos.coords.longitude, pos.coords.latitude).then((res) => {
          this.setState({
            filters: {
              ...this.state.filters,
              location: res.data.zipcode
            },
            geoLocation: {
              lat: pos.coords.latitude,
              long: pos.coords.longitude,
              maxDistance: distanceRange[defaultRangeIndex].value,
            }
          }, resolve);
        }, resolve);
      }, resolve);
    });
  }

  // Initial events on load / updated search
  getEvents() {
    this.setState({ isFetchingEvents: true });

    // Make sure at top of window to properly show loading icon and no-results messages
    window.scrollTo(0, 0);

    // Filter values
    const { filters, geoLocation } = this.state;
    const mergedFilters = Object.assign({}, filters, { geoLocation });
    const odataValues = buildFilterValues(mergedFilters, odataFilterTypes);
    const nonOdataValues = buildFilterValues(mergedFilters, nonOdataFiltertypes);

    eventsAPI.getEvents(nonOdataValues, odataValues)
      .then(res => {
        // Update state
        this.setState({
          events: res._embedded['osdi:events'],
          isFetchingEvents: false,
          hasMoreEvents: hasMoreEventsToLoad(res.page, res.total_pages)
        }, () => {
          // Update naive cache
          eventsStorage.setEventsStorage({
            events: this.state.events,
            hasMoreEvents: this.state.hasMoreEvents,
            currentPage: this.state.currentPage
          });
        });
      })
      .catch(err => {
        console.error(err);
        eventsStorage.clearCache();
        this.setState({ isFetchingEvents: false });
      });
  }

  // When loading more results for a current search
  loadMoreEvents() {
    const { currentPage, events, filters } = this.state;
    const nextPage = currentPage + 1;

    // Filter values
    const odataValues = buildFilterValues(filters, odataFilterTypes);
    const nonOdataValues = buildFilterValues(filters, nonOdataFiltertypes);

    this.setState({ currentPage: nextPage, isFetchingMoreEvents: true });

    eventsAPI.getEvents({ page: nextPage, ...nonOdataValues }, odataValues)
      .then(res => {
        this.setState({
          events: [...events, ...res._embedded['osdi:events']],
          isFetchingMoreEvents: false,
          hasMoreEvents: hasMoreEventsToLoad(res.page, res.total_pages)
        }, () => {
          // Update naive cache
          eventsStorage.setEventsStorage({
            events: this.state.events,
            hasMoreEvents: this.state.hasMoreEvents,
            currentPage: this.state.currentPage
          });
        });
      })
      .catch(err => {
        this.setState({ isFetchingMoreEvents: false });
        eventsStorage.clearCache();
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
      // After state update, update URL query params and then fetch events
      this._updateQueryString();
      this._getEvents();
    });
  }

  updateQueryString() {
    const updatedFilters = _.pickBy(this.state.filters);  // make new object and return new object
    updatedFilters.startDate = dateTimeUtils.getMomentISOstring(updatedFilters.startDate);

    const updatedQueryString = queryString.stringify(updatedFilters);
    this.props.history.push('?' + updatedQueryString);
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

Events.propTypes = {
  location: PropTypes.shape({
    search: PropTypes.string
  }),
  history: PropTypes.shape({
    push: PropTypes.func.isRequired
  }).isRequired
};

export default Events;
