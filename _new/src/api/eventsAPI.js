import axios from 'axios';

function getEvents() {
  return axios.get('https://resistance-calendar.herokuapp.com/facebook/events')
    .then(res => res.data);
}

export default {
  getEvents
};
