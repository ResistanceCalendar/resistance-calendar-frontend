import React, { Component, PropTypes } from 'react';
import moment from 'moment';
import FaFacebookSquare from 'react-icons/lib/fa/facebook-square';
import FaTwitter from 'react-icons/lib/fa/twitter';

import { DateBlock, Loading } from '../';
import { eventsAPI } from '../../api';
import styles from './EventDetails.sass';


const renderAddress = (loc) => {
  const { address_lines: addressLines, locality, region, postal_code: postalCode } = loc;
  // Will have to see how this data structure holds up over different events
  return (
    <div className={styles.info}>
      <div className={styles.infoLabel}>Location</div>
      { addressLines[0] && <div>{addressLines[0]}</div> }
      <div>{locality} {region}, {postalCode}</div>
    </div>
  );
};

const renderTimeRange = (startDate, endDate) => {
  // TDB how to properly format this - would be nice to avoid bringing in moment.js
  const startTime = (new Date(startDate)).toLocaleTimeString();
  const endTime = (new Date(endDate)).toLocaleTimeString();
  const dateString = moment(startDate).format('ddd, MMMM DD, YYYY');

  return (
    <div className={styles.info}>
      <div className={styles.infoLabel}>Date & Time</div>
      <div>{dateString}</div>
      <div>{startTime} {endDate ? `- ${endTime}` : ''}</div>
    </div>
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
      return <Loading />;
    } else if (!event) {
      return <div className={styles.noDataMsg}>No event data</div>;
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
        <div className={styles.titleWrapper}>
          <DateBlock date={startDate} />
          <h1>{title}</h1>
          { loc && loc.locality &&
            <div className={styles.location}>{loc.locality}, {loc.region}</div>
          }
        </div>
        <div className={styles.content}>
          <div className={styles.left}>
            <img src={featuredImageUrl || 'http://www.fillmurray.com/950/500'} alt="featured event" />
            <p className={styles.description}>{description}</p>
          </div>
          <div className={styles.right}>
            <div>
              <a
                href={browserUrl}
                target="_blank"
                rel="noopener noreferrer"
                className={styles.shareBtn}
              >
                EVENT PAGE
              </a>
            </div>
            {loc && renderAddress(loc)}
            {startDate && renderTimeRange(startDate, endDate)}
            <div className={styles.socialBtns}>
              <a href={shareUrl} className={styles.facebookBtn}>
                <FaFacebookSquare size={25} />
                <span>Share on Facebook</span>
              </a>
              <a href={shareUrl} className={styles.twitterBtn}>
                <FaTwitter size={25} />
                <span>Share on Twitter</span>
              </a>
            </div>
          </div>
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
  }).isRequired
};

export default EventDetails;
