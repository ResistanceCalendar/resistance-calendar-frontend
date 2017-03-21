import React, { Component, PropTypes } from 'react';
import { Link } from 'react-router-dom';

import { DateBlock } from '../';
import { eventsAPI } from '../../api';


const renderAddress = (loc) => {
  const { address_lines: addressLines, locality, region, postal_code: postalCode } = loc;
  // Will have to see how this data structure holds up over different events
  return (
    <div>
      { addressLines[0] && <span>{addressLines[0]}</span> }
      <span>{locality} {region}, {postalCode}</span>
    </div>
  );
};

const renderTimeRange = (startDate, endDate) => {
  // TDB how to properly format this - would be nice to avoid bringing in moment.js
  const startTime = (new Date(startDate)).toLocaleTimeString();
  const endTime = (new Date(endDate)).toLocaleTimeString();

  return (
    <div>{startTime} - {endTime}</div>
  );
};

class EventDetails extends Component {
  constructor() {
    super();

    this.state = {
      isFetchingEvent: true,
      event: null
    };
  }

  componentDidMount() {
    const { eventId } = this.props.match.params;
    this.setState({ isFetchingEvent: true });

    eventsAPI.getEventById(eventId)
      .then(event => {
        this.setState({ event, isFetchingEvent: false });
      })
      .catch(err => {
        console.error(err);
        this.setState({ isFetchingEvent: false });
      });
  }

  render() {
    const { event, isFetchingEvent } = this.state;

    // Depending on snappiness of server, may not need to display loading
    if (isFetchingEvent) {
      return <div>Loading...</div>;
    } else if (!event) {
      return (
        <div>
          <div>No event data</div>
          <Link to="/">Back to Events</Link>
        </div>
      );
    }

    const {
      title,
      start_date: startDate,
      end_date: endDate,
      share_url: shareUrl,
      browser_url: browserUrl,
      featured_image_url: featuredImageUrl,
      description,
      loc
    } = event;

    return (
      <div>
        <Link to="/">Back to Events</Link>
        <div>
          <DateBlock date={startDate} />
          { loc && <span>{loc.locality} {loc.region}</span>}
        </div>
        <div>
          <h1>{title}</h1>
        </div>
        <img src={featuredImageUrl} alt="featured event" />
        {loc && renderAddress(loc)}
        {renderTimeRange(startDate, endDate)}
        <div>
          <a href={browserUrl} target="_blank" rel="noopener noreferrer">Event Page</a>
          <a href={shareUrl} target="_blank" rel="noopener noreferrer">Share Event</a>
        </div>
        <div>
          <p>{description}</p>
        </div>
      </div>
    );
  }
}

EventDetails.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      eventId: PropTypes.string
    })
  })
};

export default EventDetails;
