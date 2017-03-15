import React from 'react';
import { EventCard, EventFilters } from './';

export default class EventList extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      filters: {
        searchText: ''
      }
    };
  }

  updateFilters(updatedFilters) {
    this.setState({
      filters: {
        ...this.state.filters,
        ...updatedFilters
      }
    });
  }

  renderEvents() {
    return this.props.events.reduce((filteredEvents, event) => {
      if (event.title.includes(this.state.filters.searchText)) {
        filteredEvents.push( <EventCard key={event.uuid} event={event}/>)
      }
      return filteredEvents;
    }, [])
  }

  render() {
    const { events } = this.props;

    return (
      <div>
        <EventFilters
          filters={this.state.filters}
          updateFilters={this.updateFilters.bind(this)}
        />
        <ul>{this.renderEvents()}</ul>
        <style>{` `}</style>
      </div>
    );
  }
}
