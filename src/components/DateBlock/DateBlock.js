import React, { PropTypes } from 'react';
import { dateTimeUtils } from '../../utils';

import styles from './DateBlock.sass';

const DateBlock = ({ startDate, endDate }) => {
  const isMultiDayEvent = dateTimeUtils.dateTimeNoOffset(startDate, 'DDD') !== dateTimeUtils.dateTimeNoOffset(endDate, 'DDD');

  //  get start date values
  const [startDayName, startMonth, startDayNum] = dateTimeUtils.dateTimeNoOffset(startDate, 'ddd MMM D').split(' ');

  //  get end date values
  const [endMonth, endDayNum] = dateTimeUtils.dateTimeNoOffset(endDate, 'MMM D').split(' ');

  // display appropriate info based on whether or not this is a multi-day event or not
  const leftBox = isMultiDayEvent ? `${startMonth} ${startDayNum} -` : startDayName;
  const rightBox = isMultiDayEvent ? `${endMonth} ${endDayNum}` : `${startMonth} ${startDayNum}`;

  return (
    <div className={styles.container}>
      <span className={styles.left}>{leftBox}</span>
      <span className={styles.right}>{rightBox}</span>
    </div>
  );
};

DateBlock.propTypes = {
  startDate: PropTypes.string.isRequired,
  endDate: PropTypes.string,
};

export default DateBlock;
