import React, { PropTypes } from 'react';

import styles from './DateBlock.sass';

const DateBlock = ({ date }) => {
  const [dayName, month, dayNum] = (new Date(date)).toDateString().split(' ');

  return (
    <div className={styles.container}>
      <span className={styles.left}>{dayName}</span>
      <span className={styles.right}>{month} {dayNum}</span>
    </div>
  );
};

DateBlock.propTypes = {
  date: PropTypes.string.isRequired
};

export default DateBlock;
