import axios from 'axios';

import { queryBuilder } from '../utils';

const BASE_URL = 'https://resistance-calendar.herokuapp.com/v1/events';

function getEvents({ page = 0, perPage = 25 }, filterParams) {
  const pageUrl = `page=${page}`;
  const perPageUrl = `per_page=${perPage}`;
  const orderByUrl = '$orderby=start_date desc';
  const filterUrl = queryBuilder.eventsFilter(filterParams);

  return axios.get(`${BASE_URL}?${pageUrl}&${perPageUrl}&${orderByUrl}${filterUrl}`)
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
