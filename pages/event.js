import React, { Component } from 'react';
import { Layout, EventDetails, Header, Footer } from '../components';
import { fixtureApi } from '../services';

export default class EventPage extends Component {
  static async getInitialProps ({query}) {
    const events = await fixtureApi.getAllEvents();
    const event = events.find(event => event.uuid === global.decodeURIComponent(query.slug));
    return {event};
  }

  // Would be nice to have a true "index" page that contains our header/footer across routes
  // Not quite sure how to do this with next.js yet - maybe in _document.js?
  render () {
    return (
      <Layout>
        <Header />
        <EventDetails event={this.props.event} />
        <Footer />
      </Layout>
    );
  }
}
