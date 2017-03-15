import React from 'react';
import Layout from '../components/Layout';
import EventList from '../components/EventList';

export default class Index extends React.Component {
  render() {
    return (
      <Layout>
        <img src="static/img/hero.png" style={{display: 'flex', margin: 'auto'}} width="450"/>
        <EventList events={this.props.events}/>
      </Layout>
    );
  }
}
