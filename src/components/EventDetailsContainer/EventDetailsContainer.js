import React, { PropTypes } from 'react';
import { Link } from 'react-router-dom';
import _ from 'lodash';
import FaArrowLeft from 'react-icons/lib/fa/arrow-left';

import { EventDetails } from '../';
import styles from './EventDetailsContainer.sass';

const EventDetailsContainer = ({ match, location }) => {
  const queryString = _.isPlainObject(location.state) ? location.state.queryString : '';

  return (
    <div>
      <div className={styles.backWrapper}>
        <div className={styles.linkWrapper}>
          <Link to={`/${queryString}`} className={styles.link}>
            <FaArrowLeft />
            <div>Back to Events</div>
          </Link>
        </div>
      </div>
      <EventDetails match={match} />
    </div>
  );
};

EventDetailsContainer.propTypes = {
  match: PropTypes.shape().isRequired,
  location: PropTypes.shape({
    state: PropTypes.shape()
  }).isRequired
};

export default EventDetailsContainer;
