import {Component} from 'react';
import Layout from '../components/Layout';
import EVENTS from '../fixtures/events'

export default class EventPage extends React.Component {
  static async getInitialProps ({query}) {
    return { event: EVENTS.find( event => event.id === query.slug)}
  }

  render() {
    let {
      name,
      start_time,
      interested_count,
      category,
      cover,
      description
    } = this.props.event

    return (
      <Layout>
        <h1>{name}</h1>
        <img src={cover.source}/>
        <div>{start_time}</div>
        <div>{interested_count}</div>
        <div>{category}</div>
        <p>{description}</p>
      </Layout>
    )
  }
}
