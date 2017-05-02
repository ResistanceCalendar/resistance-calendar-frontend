import React, { PropTypes } from 'react';
import { EventCard } from '../';

import styles from './EventsList.sass';

function renderEvents(events, filters) {
  const eventCards = events.map(event =>
    <EventCard
      key={event._id}
      event={event}
      className={styles.eventCard}
    />
  );
//   1.) when no search text is set but there is a location/range: “No events are coming up...Try setting a larger distance range”
// 2.) when search text is set with no location/range: “No events are coming up...Try searching for something else”
// 3.) when both are set: “No events are coming up...Try searching for something else or setting a larger distance range”
// 4.) when neither are set -- e.g. “No events are coming up”
  // const { searchText, location, range } = newFilters;
  let noEventText = 'No events are coming up';

  if (!filters.searchText && filters.location) {
    noEventText += '...Try setting a larger distance range';
  } else if (filters.searchText && !filters.location) {
    noEventText += '...Try searching for something else';
  } else if (filters.searchText && filters.location) {
    noEventText += '...Try searching for something else or setting a larger distance range';
  }

  if (!eventCards.length) {
    return <div className={styles.noResults}>{noEventText}</div>;
  }

  return eventCards;
}

const EventsList = ({ events, filters }) => {
  return <ul className={styles.listContainer}>{renderEvents(events, filters)}</ul>;
};

EventsList.propTypes = {
  events: PropTypes.arrayOf(PropTypes.shape()),
  filters: PropTypes.shape({
    searchText: PropTypes.string,
    location: PropTypes.string,
    ranger: PropTypes.number
  })
};

export default EventsList;
