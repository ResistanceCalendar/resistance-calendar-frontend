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

function getCroppedImageUrl(url) {
  // See: http://cloudinary.com/documentation/image_transformation_reference
  // example URL: https://res.cloudinary.com/hqrdtqlz0/image/upload/c_thumb,g_faces:center,z_0.75,h_80,w_80/facebook:162777260891158
  const separator = '/image/upload';
  const [url1, url2] = url.split(separator);

  return `${url1}${separator}/c_thumb,g_faces:center,z_0.75,h_200,w_200/${url2}`;
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

  // TODO: May have to change how this check is done once we switch over to real default image
  const croppedFeaturedImageUrl = featuredImageUrl ? getCroppedImageUrl(featuredImageUrl) : 'http://www.fillmurray.com/550/450';

  return (
    <li className={`${styles.card} ${className || ''}`}>
      <Link to={`/event/${_id}`}>
        <div className={styles.imageWrapper}>
          <img
            src={croppedFeaturedImageUrl}
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
