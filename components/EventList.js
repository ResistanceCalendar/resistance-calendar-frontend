import React from 'react';
import EventCard from './EventCard';

import { connect } from 'react-redux';

class EventList extends React.Component {
  constructor(props) {
    super(props)
    this.state = { searchText: '' }
  }

  renderEvents() {
    return this.props.events.reduce((filteredEvents, event) => {
      if(event.name.includes(this.state.searchText)) {
        filteredEvents.push( <EventCard key={event.id} event={event}/>)
      }
       return filteredEvents
    }, [])
  }

  render() {
    return (
      <div>
        <div>
          <input
            value={this.state.searchText}
            onInput={e => this.setState({ searchText: e.target.value })}
            placeholder="search"
          />
        </div>
        <ul>{this.renderEvents()}</ul>
        <style>{` `}</style>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return state;
}

export default connect(mapStateToProps)(EventList);
