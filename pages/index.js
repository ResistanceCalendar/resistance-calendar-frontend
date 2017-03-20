import React from 'react';

import { Layout, EventList } from '../components';
import { fixtureApi } from '../services';

export default class Index extends React.Component {
  static async getInitialProps () {
    const events = await fixtureApi.getAllEvents();
    return { events };
  }

  render () {
    return (
      <Layout>
        <EventList events={this.props.events} />
      </Layout>
    );
  }
}
