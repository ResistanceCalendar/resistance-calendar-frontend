import {Component} from 'react';
import Layout from '../components/Layout';
import EVENTS from '../fixtures/events'

export default class EventPage extends React.Component {
  static async getInitialProps ({query}) {
    return { event: EVENTS.find( event => event.slug === query.slug)}
  }

  render() {
    let {title} = this.props.event
    return (
      <Layout>
        <p>{title}</p>
      </Layout>
    )
  }
}
