import React from 'react';

import Style from '../config/GlobalStyle';
import { Layout, EventList, Header, Footer } from '../components';
import { fixtureApi } from '../services';

export default class Index extends React.Component {
  static async getInitialProps () {
    const events = await fixtureApi.getAllEvents();
    return { events };
  }

  render () {
    return (
      <Layout>
        <Style />
        <Header />
        <EventList events={this.props.events} />
        <Footer />
      </Layout>
    );
  }
}
