import React, { PropTypes } from 'react';
import { EventCard } from '../';

import styles from './EventsList.sass';

function renderEvents(events, filters) {
  const matchedEvents = events.reduce((filteredEvents, event) => {
    if (event.title.toLowerCase().includes(filters.searchText.toLowerCase())) {
      filteredEvents.push(
        <EventCard
          key={event._id}
          event={event}
          className={styles.eventCard}
        />
      );
    }

    return filteredEvents;
  }, []);

  if (!matchedEvents.length) {
    return <div className={styles.noResults}>No events</div>;
  }

  return matchedEvents;
}

const EventsList = ({ events, filters }) => {
  return <ul className={styles.listContainer}>{renderEvents(events, filters)}</ul>;
};

EventsList.propTypes = {
  events: PropTypes.arrayOf(PropTypes.shape()),
  filters: PropTypes.shape()
};

export default EventsList;
