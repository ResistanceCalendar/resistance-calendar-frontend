import moment from 'moment';

function dateTimeNoOffset(timeStamp, momentFormat) {
  const offset = moment.parseZone(timeStamp).utcOffset();

  return moment.utc(timeStamp).utcOffset(offset).format(momentFormat);
}

function startTimeDateTimeComparison(startVal, endVal) {
  return moment(startVal).format('x') < moment(endVal).format('x');
}

function isMulti(startVal, endVal, formatForComparison) {
  // make sure we have BOTH a start and end time, AND that the
  // start time is not somehow greater than the end time
  if ((!startVal || !endVal) || !startTimeDateTimeComparison(startVal, endVal)) {
    return false;
  }

  return dateTimeNoOffset(startVal, formatForComparison) !==
  dateTimeNoOffset(endVal, formatForComparison);
}

function displayTimeString(startTime, endTime) {
  let endTimeDisplay;
  let endTimeAmPm;

  if (!startTime) {
    return false;
  }

  if (!endTime || !startTimeDateTimeComparison(startTime, endTime)) {
    endTimeDisplay = '';
  } else {
    // if it's a multi-day event, then we know exactly what to do, no need to go any further...
    if (isMulti(startTime, endTime, 'DDD')) {
      return `${dateTimeNoOffset(startTime, 'h:mm A MMM D')} - ${dateTimeNoOffset(endTime, 'h:mm A MMM D')}`;
    }

    // otherwise, let's generate the end time display, which may or may not use the
    // same format as the start time, depending on AM/PM differences
    endTimeDisplay = ` to ${dateTimeNoOffset(endTime, 'LT')}`;
    // grab the end AM/PM value to compare when determining whether we need to specify the
    // AM/PM for the start time
    endTimeAmPm = dateTimeNoOffset(endTime, 'A');
  }

  // here's the start time AM/PM value we need for our comparison
  const startTimeAmPm = dateTimeNoOffset(startTime, 'A');
  const startTimeFormat = startTimeAmPm !== endTimeAmPm ? 'LT' : 'h:mm';
  const startTimeDisplay = dateTimeNoOffset(startTime, startTimeFormat);

  return startTimeDisplay + endTimeDisplay;
}

function displayDateString(startDate, endDate) {
  let endDateDisplay;

  if (!startDate) {
    return false;
  }

  const startDateDisplay = dateTimeNoOffset(startDate, 'ddd, MMMM D, YYYY');

  // if there is no end date,
  if (!endDate || !isMulti(startDate, endDate, 'DDD') || !startTimeDateTimeComparison(startDate, endDate)) {
    endDateDisplay = '';
  } else {
    endDateDisplay = ` - ${dateTimeNoOffset(endDate, 'ddd, MMMM D, YYYY')}`;
  }


  return startDateDisplay + endDateDisplay;
}

function getMomentISOstring(val) {
  return moment(val).startOf('day').toISOString();
}

export default {
  dateTimeNoOffset,
  displayTimeString,
  displayDateString,
  getMomentISOstring
};
