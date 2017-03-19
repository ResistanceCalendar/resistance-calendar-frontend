import React, { Component } from 'react';
import { Layout, EventDetails } from '../components';
import { fixtureApi } from '../services';

export default class EventPage extends Component {
  static async getInitialProps ({query}) {
    const events = await fixtureApi.getAllEvents();
    const event = events.find(event => event.uuid === global.decodeURIComponent(query.slug));
    return {event};
  }

  render () {
    return (
      <Layout>
        <EventDetails event={this.props.event} />
      </Layout>
    );
  }
}
