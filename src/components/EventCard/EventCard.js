import React, { PropTypes } from 'react';
import { Link } from 'react-router-dom';
import _ from 'lodash';

import { DateBlock } from '../';
import styles from './EventCard.sass';

const truncateOptions = {
  length: 250,
  separator: /, +/  // break on commas and spaces
};

function renderLocation(location) {
  if (location && location.locality && location.region) {
    return <span className={styles.location}>{location.locality}, {location.region}</span>;
  }

  return null;
}

const EventCard = ({ event, className }) => {
  const {
    start_date: startDate,
    featured_image_url: featuredImageUrl,
    title,
    description,
    _id,
    location
  } = event;

  // TODO: Seems like the featured_image_url is no longer coming back -- follow up when services more stable

  return (
    <li className={`${styles.card} ${className || ''}`}>
      <Link to={`/event/${_id}`}>
        <div className={styles.imageWrapper}>
          <img
            src={featuredImageUrl || 'http://www.fillmurray.com/550/450'}
            alt="featured event"
          />
        </div>
        <div className={styles.contentWrapper}>
          <div className={styles.dateLocation}>
            <DateBlock date={startDate} />
            <div className={styles.title}>{title}</div>
            { renderLocation(location) }
          </div>
          <div className={styles.time}>6:00PM-9:00PM (PLACEHOLDER)</div>
          <p className={styles.description}>{_.truncate(description, truncateOptions)}</p>
        </div>
      </Link>
    </li>
  );
};

EventCard.propTypes = {
  event: PropTypes.shape().isRequired,
  className: PropTypes.string
};

export default EventCard;
