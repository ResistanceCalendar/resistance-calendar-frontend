import React, { PropTypes } from 'react';
import styles from './RsvpBadge.sass';

const toK = (n) => {
  return n >= 1000 ? (n / 1000).toFixed(1) + 'K' : n;
};

const RsvpBadge = ({ totalAccepted, center, type }) => {
  const alignStyle = center ? styles.wrapperCenter : styles.wrapperRight;
  const spanRSVP = <span className={styles.shortText}>{totalAccepted}+ Going</span>;
  if (type === 'mobileOnly') {
    return spanRSVP;
  }
  return (
    <div>
      {
        (type !== 'desktopOnly') && spanRSVP
      }
      <div className={[styles.wrapper, alignStyle].join(' ')}>
        <div className={styles.left}>
          {toK(totalAccepted)}
        </div>
        <div className={styles.right}>
          RSVPS
        </div>
      </div>
    </div>
  );
};

RsvpBadge.propTypes = {
  totalAccepted: PropTypes.number,
  center: PropTypes.bool,
  type: PropTypes.oneOf(['mobileOnly', 'desktopOnly'])
};

export default RsvpBadge;
