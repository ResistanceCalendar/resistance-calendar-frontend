import React, { Component } from 'react';
import _ from 'lodash';

import { EventsList, EventFilters, Loading } from '../';
import { eventsAPI } from '../../api';
import styles from './Events.sass';

function hasMoreEventsToLoad(currentPage, totalPages) {
  return currentPage + 1 < totalPages;
}

class Events extends Component {
  constructor(props) {
    super(props);
    this.state = {
      filters: {
        searchText: '',
        location: null,
        range: null,
        startDate: null
      },
      isFetchingEvents: true,
      isFetchingMoreEvents: false,
      events: [],
      isMoreEvents: true,  // to show/hide "Load More Events" button
      currentPage: 0
    };

    this._getEvents = _.debounce(this.getEvents, 250, { leading: true });
  }

  componentDidMount() {
    this.getEvents();
  }

  getEvents() {
    this.setState({ isFetchingEvents: true });

    const filtersWithValues = _.pickBy(this.state.filters);  // removes keys that have falsey values

    eventsAPI.getEvents({}, filtersWithValues)
      .then(res => this.setState({
        events: res._embedded['osdi:events'],
        isFetchingEvents: false,
        isMoreEvents: hasMoreEventsToLoad(res.page, res.total_pages)
      }))
      .catch(err => {
        console.error(err);
        this.setState({ isFetchingEvents: false });
      });
  }

  loadMoreEvents() {
    const { currentPage, events, filters } = this.state;
    const nextPage = currentPage + 1;
    const filtersWithValues = _.pickBy(filters);  // removes keys that have falsey values

    this.setState({ currentPage: nextPage, isFetchingMoreEvents: true });

    eventsAPI.getEvents({ page: nextPage }, filtersWithValues)
      .then(res => this.setState({
        events: [...events, ...res._embedded['osdi:events']],
        isFetchingMoreEvents: false,
        isMoreEvents: hasMoreEventsToLoad(res.page, res.total_pages)
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

  renderEventsList(events, isMoreEvents, isFetchingMoreEvents) {
    return (
      <div>
        <EventsList events={events} />
        { isMoreEvents &&
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
      isMoreEvents
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
          <div className={styles.loadingWrapper}><Loading /></div> :
          this.renderEventsList(events, isMoreEvents, isFetchingMoreEvents)
        }
      </div>
    );
  }
}

Events.propTypes = {};

export default Events;
