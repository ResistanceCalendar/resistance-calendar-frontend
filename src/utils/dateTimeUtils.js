import moment from 'moment';

function dateTimeNoOffset(timeStamp, momentFormat) {
  const offset = moment.parseZone(timeStamp).utcOffset();

  return moment.utc(timeStamp).utcOffset(offset).format(momentFormat);
}

export default {
  dateTimeNoOffset
};
