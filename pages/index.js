import 'isomorphic-fetch';
import React from 'react';
import Layout from '../components/Layout';
import Counter from '../components/Counter';
import EventList from '../components/EventList';
import EVENTS from '../fixtures/events'

export default class Index extends React.Component {
  static async getInitialProps () {
    const res = await fetch('https://dev.resistancecalendar.org/data.php');
    const json = await res.json();
    return { counts: json, events: EVENTS }
  }

  render() {
    return (
      <Layout>
        <img src="static/img/hero.png" style={{display: 'flex', margin: 'auto'}} width="450"/>
        <Counter counts={this.props.counts}/>
        <EventList events={this.props.events}/>
      </Layout>
    );
  }
}
