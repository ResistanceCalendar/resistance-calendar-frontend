import axios from 'axios';

function getEvents({ page = 0, perPage = 25 }) {
  return axios.get(`https://resistance-calendar.herokuapp.com/v1/events?page=${page}&per_page=${perPage}`)  // eslint-disable-line max-len
    .then(res => res.data);
}

function getEventById(id) {
  return axios.get(`https://resistance-calendar.herokuapp.com/v1/events?$filter=_id eq '${id}'`)
    .then(res => res.data._embedded['osdi:events'][0]);
}

export default {
  getEvents,
  getEventById
};
