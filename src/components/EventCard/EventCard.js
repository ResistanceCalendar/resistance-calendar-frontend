import React, { PropTypes } from 'react';
import { Link } from 'react-router-dom';
import _ from 'lodash';

import { DateBlock } from '../';
import styles from './EventCard.sass';

const truncateOptions = {
  length: 250,
  separator: /, +/  // break on commas and spaces
};

function renderLocation(loc) {
  if (loc && loc.locality && loc.region) {
    return <span className={styles.location}>{loc.locality}, {loc.region}</span>;
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
    loc
  } = event;

  // TODO: Seems like the featured_image_url is no longer coming back -- follow up when services more stable

  return (
    <li className={`${styles.card} ${className || ''}`}>
      <div className={styles.imageWrapper}>
        <img
          src={featuredImageUrl || 'http://www.fillmurray.com/550/450'}
          alt="featured event"
        />
      </div>
      <div className={styles.contentWrapper}>
        <div className={styles.dateLocation}>
          <DateBlock date={startDate} />
          { renderLocation(loc) }
        </div>
        <Link to={`/event/${_id}`}>
          <div className={styles.title}>{title}</div>
        </Link>
        <div className={styles.time}>6:00PM-9:00PM (PLACEHOLDER)</div>
        <p className={styles.description}>{_.truncate(description, truncateOptions)}</p>
      </div>
    </li>
  );
};

EventCard.propTypes = {
  event: PropTypes.shape().isRequired,
  className: PropTypes.string
};

export default EventCard;
