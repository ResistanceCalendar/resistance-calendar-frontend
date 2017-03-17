import React, { PropTypes } from 'react';
import { DateBlock } from '../components';
import { Link } from '../routes';

const renderAddress = ({ address_lines: addressLines, locality, region, postal_code: postalCode }) => {
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

const EventDetails = ({ event }) => {
  const {
    title,
    name,
    start_date: startDate,
    end_date: endDate,
    share_url: shareUrl,
    browser_url: browserUrl,
    featured_image_url: featuredImageUrl,
    summary,
    location
  } = event;

  return (
    <div>
      <Link href='/'><a>Back to Events</a></Link>
      <div>
        <DateBlock date={startDate} />
        <span>{location.locality} {location.region}</span>
      </div>
      <div>
        <h1>{title}</h1>
        <h3>{name}</h3>
      </div>
      <img src={featuredImageUrl} alt='event featured image' />
      {renderAddress(location)}
      {renderTimeRange(startDate, endDate)}
      <div>
        <a href={browserUrl} target='_blank' rel='noopener noreferrer'>Event Page</a>
        <a href={shareUrl} target='_blank' rel='noopener noreferrer'>Share Event</a>
      </div>
      <div>
        <p>{summary}</p>
      </div>
    </div>
  );
};

EventDetails.propTypes = {
  event: PropTypes.object.isRequired
};

export default EventDetails;
