import React from 'react';
import Layout from '../components/Layout';
import EventList from '../components/EventList';
import EVENTS from '../fixtures/events'

export default class Index extends React.Component {
  static async getInitialProps () {
    const res = await fetch('https://jsonplaceholder.typicode.com/posts');
    const json = await res.json();
    return { json: json, events: EVENTS }
  }

  render() {
    console.log(this.props.json[0])
    return (
      <Layout>
        <img src="static/img/hero.png" style={{display: 'flex', margin: 'auto'}} width="450"/>
        <EventList events={this.props.events}/>
      </Layout>
    );
  }
}
