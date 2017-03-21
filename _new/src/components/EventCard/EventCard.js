import React, { PropTypes } from 'react';
import { Link } from 'react-router-dom';

import styles from './EventCard.sass';

const EventCard = ({ event }) => {
  // TODO: Seems like the featured_image_url is no longer coming back -- follow up when services more stable
  return (
    <li className={styles.card}>
      <Link to={`/event/${event._id}`}>
        <img src={event.featured_image_url} alt="featured event" />
        <div className={styles.title}>{event.title}</div>
      </Link>
    </li>
  );
};

EventCard.propTypes = {
  event: PropTypes.shape().isRequired
};

export default EventCard;
