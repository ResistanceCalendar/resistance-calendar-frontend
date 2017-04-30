import React, { PropTypes } from 'react';
import { EventCard } from '../';

import styles from './EventsList.sass';

function renderEvents(events, hasFilter) {
  const eventCards = events.map(event =>
    <EventCard
      key={event._id}
      event={event}
      className={styles.eventCard}
    />
  );
  const noFilteredEventText = 'We don\'t see any events for this filter, try setting a wider range';
  const noEventText = hasFilter ? noFilteredEventText : 'No events';

  if (!eventCards.length) {
    return <div className={styles.noResults}>{noEventText}</div>;
  }

  return eventCards;
}

const EventsList = ({ events, hasFilter }) => {
  return <ul className={styles.listContainer}>{renderEvents(events, hasFilter)}</ul>;
};

EventsList.propTypes = {
  events: PropTypes.arrayOf(PropTypes.shape()),
  hasFilter: PropTypes.bool
};

export default EventsList;
