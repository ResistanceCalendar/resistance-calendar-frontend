import React from 'react';
import Layout from '../components/Layout';
import EventList from '../components/EventList';
import { fixtureApi } from '../services';

export default class Index extends React.Component {
  static async getInitialProps() {
    const events = await fixtureApi.getAllEvents();

    return { events: events._embedded['osdi:events'] };
  }

  render() {
    return (
      <Layout>
        <img src="static/img/hero.png" style={{display: 'flex', margin: 'auto'}} width="450" />
        <EventList events={this.props.events}/>
      </Layout>
    );
  }
}
