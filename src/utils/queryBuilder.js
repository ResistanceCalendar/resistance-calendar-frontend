import _ from 'lodash';
import moment from 'moment';

// Builds up filter string by filter type
const eventFilters = new Map([
  ['startDate', val => `start_date eq ${moment(val).format('YYYY-MM-DD')}`],
  ['searchText', val => `contains(title, '${val}') or contains(name, '${val}') or contains(description, '${val}')`]
]);

function eventsFilter(params = {}) {
  if (_.isEmpty(params)) {
    return '';
  }

  // Build array of different filter strings (e.g. for start date, location, etc)
  const filterStrings = _.map(params, (val, paramName) => eventFilters.get(paramName)(val));

  return `&$filter=${filterStrings.join(' and ')}`;
}

export default {
  eventsFilter
};
