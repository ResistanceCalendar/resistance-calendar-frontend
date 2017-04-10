import React, { PropTypes } from 'react';
import { EventCard } from '../';

import styles from './EventsList.sass';

function renderEvents(events) {
  const eventCards = events.map(event =>
    <EventCard
      key={event._id}
      event={event}
      className={styles.eventCard}
    />
  );

  if (!eventCards.length) {
    return <div className={styles.noResults}>No events</div>;
  }

  return eventCards;
}

const EventsList = ({ events }) => {
  return <ul className={styles.listContainer}>{renderEvents(events)}</ul>;
};

EventsList.propTypes = {
  events: PropTypes.arrayOf(PropTypes.shape())
};

export default EventsList;
