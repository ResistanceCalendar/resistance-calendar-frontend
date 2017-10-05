import React, { PropTypes } from 'react';
import { Link } from 'react-router-dom';
import _ from 'lodash';

import { devMode } from '../../config';
import { dateTimeUtils, urlUtils } from '../../utils';
import { DateBlock, RsvpBadge } from '../';
import styles from './EventCard.sass';

const truncateOptions = {
  length: 350,
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
    total_accepted: totalAccepted,
    location
  } = event;

  const featuredImageUrlOrDefault = (!devMode && featuredImageUrl) ?
    urlUtils.getImageUrl(featuredImageUrl, 'c_thumb,g_faces:center,z_0.75,h_150,w_150') :
    '../static/img/default-event-200.png';

  return (
    <li className={`${styles.card} ${className || ''}`}>
      <div className={styles.imageAndRsvpWrapper}>
        <div className={styles.imageWrapper}>
          <Link
            to={{
              pathname: `/event/${_id}`,
              state: {
                queryString: window.location.search
              }
            }}
          >
            <img
              src={featuredImageUrlOrDefault}
              alt="featured event"
            />
          </Link>
        </div>

        {
          totalAccepted > 0 &&
          <RsvpBadge
            totalAccepted={totalAccepted}
            center
            type="desktopOnly"
          />
        }
      </div>

      <div className={styles.contentWrapper}>
        <div className={styles.dateLocation}>
          <div>
            <DateBlock
              startDate={startDate}
              endDate={endDate}
            />
            {
              totalAccepted > 0 &&
              <RsvpBadge
                totalAccepted={totalAccepted}
                type="mobileOnly"
              />
            }
          </div>

          <Link
            to={{
              pathname: `/event/${_id}`,
              state: { queryString: window.location.search }
            }}
          >
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
