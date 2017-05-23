import React, { PropTypes } from 'react';
import { Link } from 'react-router-dom';
import _ from 'lodash';
import { devMode } from '../../config';

import { dateTimeUtils } from '../../utils';
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
    end_date: endDate,
    featured_image_url: featuredImageUrl,
    title,
    description,
    _id,
    location
  } = event;

  const featuredImageUrlOrDefault = (!devMode && featuredImageUrl) ? featuredImageUrl : '../static/img/default-event-200.png';

  return (
    <li className={`${styles.card} ${className || ''}`}>
      <div className={styles.imageWrapper}>
        <Link to={`/event/${_id}`}>
          <img
            src={featuredImageUrlOrDefault}
            alt="featured event"
          />
        </Link>
      </div>

      <div className={styles.contentWrapper}>
        <div className={styles.dateLocation}>
          <DateBlock
            startDate={startDate}
            endDate={endDate}
          />
          <Link to={`/event/${_id}`}>
            <div className={styles.title}>{title}</div>
          </Link>
          { renderLocation(location) }
        </div>
        <div className={styles.time}>{dateTimeUtils.displayTimeString(startDate, endDate)}</div>
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
