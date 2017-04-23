import axios from 'axios';

import { queryBuilder } from '../utils';

const BASE_URL = 'https://resistance-calendar.herokuapp.com/v1/events';

function getEvents(filterParams, odataParams) {
  const { page = 0, perPage = 25, location, range } = filterParams;

  // Establish URL string parts
  const pageUrl = `page=${page}`;
  const perPageUrl = `per_page=${perPage}`;
  const orderByUrl = '$orderby=start_date desc';
  const locationUrl = location && range ? `&distance_postal_code=${location}&distance_max=${range}` : '';

  // ODATA filter string
  const odataFilterUrl = queryBuilder.eventsFilter(odataParams);

  return axios.get(`${BASE_URL}?${pageUrl}&${perPageUrl}&${orderByUrl}${locationUrl}${odataFilterUrl}`)  // eslint-disable-line max-len
    .then(res => res.data);
}

function getEventById(id) {
  return axios.get(`${BASE_URL}?$filter=_id eq '${id}'`)
    .then(res => res.data._embedded['osdi:events'][0]);
}

export default {
  getEvents,
  getEventById
};
