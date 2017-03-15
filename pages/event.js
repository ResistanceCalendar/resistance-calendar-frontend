import React, { Component } from 'react';
import Layout from '../components/Layout';
import { fixtureApi } from '../services';

export default class EventPage extends Component {
  static async getInitialProps({ query }) {
    const events = await fixtureApi.getAllEvents();

    // There's no id/uuid property in the OSDI data (/services/fixturesAPI)
    // so I'm using event.identifiers[0] temporarily
    const event = events._embedded['osdi:events'].find(event => event.identifiers[0] === global.decodeURIComponent(query.slug));

    return { event };
  }

  render() {
    const {
      title,
      start_date,
      featured_image_url,
      summary
    } = this.props.event;

    return (
      <Layout>
        <h1>{title}</h1>
        <img src={featured_image_url} alt="event featured image" />
        <div>Starts at {start_date}</div>
        <p>{summary}</p>
      </Layout>
    )
  }
}
