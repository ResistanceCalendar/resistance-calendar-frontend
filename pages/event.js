import React, { Component } from 'react';
import { Layout } from '../components';
import { fixtureApi } from '../services';

export default class EventPage extends Component {
  static async getInitialProps ({query}) {
    const events = await fixtureApi.getAllEvents();
    const event = events.find(event => event.uuid === global.decodeURIComponent(query.slug));
    return {event};
  }

  render () {
    const {
      title,
      start_date: startDate,
      featured_image_url: featuredImageUrl,
      summary
    } = this.props.event;

    return (
      <Layout>
        <h1>{title}</h1>
        <img src={featuredImageUrl} alt='event featured image' />
        <div>Starts at {startDate}</div>
        <p>{summary}</p>
      </Layout>
    );
  }
}
