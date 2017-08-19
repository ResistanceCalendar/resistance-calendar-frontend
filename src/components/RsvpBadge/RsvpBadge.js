import React, { PropTypes } from 'react';
import styles from './RsvpBadge.sass';

const toK = (n) => {
  return n >= 1000 ? (n / 1000).toFixed(1) + 'K' : n;
};

const RsvpBadge = ({ totalAccepted }) => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.left}>
        {toK(totalAccepted)}
      </div>
      <div className={styles.right}>
        RSVPS
      </div>
    </div>
  );
};

RsvpBadge.propTypes = {
  totalAccepted: PropTypes.number
};

export default RsvpBadge;
