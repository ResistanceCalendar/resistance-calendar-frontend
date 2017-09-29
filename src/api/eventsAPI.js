import axios from 'axios';

import { queryBuilder } from '../utils';

const CITY_BASE_URL = 'https://resistance-calendar.herokuapp.com/v1/cities';
const EVENT_BASE_URL = 'https://resistance-calendar.herokuapp.com/v1/events';
// const EVENT_BASE_URL = 'https://resistance-calendar-pr-81.herokuapp.com/v1/events';

// Temporary while service is not returning is_canceled flag to display flag in UI
function removeCanceledEvents(events) {
  const filteredEvents = events._embedded['osdi:events'].filter(event => event.browser_url);
  return Object.assign({}, events, { _embedded: { 'osdi:events': filteredEvents } });
}

function getEvents(filterParams, odataParams) {
  const { page = 0, perPage = 25, location, range, geoLocation, orderby } = filterParams;

  // Establish URL string parts
  const pageUrl = `page=${page}`;
  const perPageUrl = `per_page=${perPage}`;
  const orderByUrl = `$orderby=${orderby}`;

  // Build either geolocation or zipcode URL
  const locationUrl = queryBuilder.buildLocationUrl(location, range, geoLocation);

  // ODATA filter string
  const odataFilterUrl = queryBuilder.eventsFilter(odataParams);

  return axios.get(`${EVENT_BASE_URL}?${pageUrl}&${perPageUrl}&${orderByUrl}${locationUrl}${odataFilterUrl}`)  // eslint-disable-line max-len
    .then(res => removeCanceledEvents(res.data));
}

function getEventById(id) {
  return axios.get(`${EVENT_BASE_URL}?$filter=_id eq '${id}'`)
    .then(res => res.data._embedded['osdi:events'][0]);
}

function getZipcode(long, lat) {
  return axios.get(`${CITY_BASE_URL}?coords=[${long},${lat}]`);
}

export default {
  getEvents,
  getZipcode,
  getEventById
};
