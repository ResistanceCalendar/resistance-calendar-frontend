import React, { PropTypes } from 'react';
import styles from './RsvpBadge.sass';

const RsvpBadge = ({ totalAccepted }) => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.left}>
        {totalAccepted}
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
