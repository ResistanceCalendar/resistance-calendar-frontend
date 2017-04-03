import React, { Component } from 'react';

import { EventsList, EventFilters, Loading } from '../';
import { eventsAPI } from '../../api';
import styles from './Events.sass';

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
      currentPage: 0
    };
  }

  componentDidMount() {
    this.getEvents();
  }

  getEvents() {
    this.setState({ isFetchingEvents: true });

    eventsAPI.getEvents({})
      .then(res => this.setState({
        events: res._embedded['osdi:events'],
        isFetchingEvents: false
      }))
      .catch(err => {
        console.error(err);
        this.setState({ isFetchingEvents: false });
      });
  }

  loadMoreEvents() {
    const { currentPage, events } = this.state;
    const nextPage = currentPage + 1;

    this.setState({ currentPage: nextPage, isFetchingMoreEvents: true });

    eventsAPI.getEvents({ page: nextPage })
      .then(res => this.setState({
        events: [...events, ...res._embedded['osdi:events']],
        isFetchingMoreEvents: false
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
    });
  }

  render() {
    const { filters, events, isFetchingEvents, isFetchingMoreEvents } = this.state;

    if (isFetchingEvents) {
      return <div className={styles.loadingWrapper}><Loading /></div>;
    }

    return (
      <div className={styles.container}>
        <div className={styles.filtersWrapper}>
          <EventFilters
            filters={filters}
            updateFilters={this.updateFilters.bind(this)}
          />
        </div>
        <EventsList
          events={events}
          filters={filters}
        />
        <div className={styles.loadMoreBtn}>
          { isFetchingMoreEvents ?
            <Loading /> :
            <button type="button" onClick={this.loadMoreEvents.bind(this)}>
              load more events
            </button>
          }

        </div>
      </div>
    );
  }
}

Events.propTypes = {};

export default Events;
