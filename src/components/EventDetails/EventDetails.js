import React, { Component, PropTypes } from 'react';

import { DateBlock, Loading, SocialBtns } from '../';
import { eventsAPI } from '../../api';
import { dateTimeUtils, urlUtils } from '../../utils';
import { devMode } from '../../config';
import styles from './EventDetails.sass';

const renderAddress = (location) => {
  const { address_lines: addressLines, locality, region, postal_code: postalCode } = location;
  // Will have to see how this data structure holds up over different events
  return (
    <div className={styles.info}>
      <div className={styles.infoLabel}>location</div>
      { addressLines[0] && <div>{addressLines[0]}</div> }
      <div>{locality} {region}, {postalCode}</div>
    </div>
  );
};

const renderTimeRange = (startDate, endDate) => {
  return (
    <div className={styles.info}>
      <div className={styles.infoLabel}>date & time</div>
      <div>{dateTimeUtils.displayDateString(startDate, endDate)}</div>
      <div>{dateTimeUtils.displayTimeString(startDate, endDate)}</div>
    </div>
  );
};

class EventDetails extends Component {
  constructor() {
    super();

    this.state = {
      isFetchingEvent: true,
      event: null,
      socialPopupOpen: false
    };

    this.toggleSocialPopup = this.toggleSocialPopup.bind(this);
    this._handleDocumentClick = this.handleDocumentClick.bind(this);
  }

  componentDidMount() {
    const { eventId } = this.props.match.params;
    window.addEventListener('click', this._handleDocumentClick);

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

  componentWillUnmount() {
    window.removeEventListener('click', this._handleDocumentClick);
  }

  // Close socialPopupOpen if clicking on the document (outside of the socialPopupOpen)
  handleDocumentClick() {
    this.setState({ socialPopupOpen: false });
  }

  toggleSocialPopup(e) {
    e.stopPropagation();
    this.setState({ socialPopupOpen: !this.state.socialPopupOpen });
  }

  render() {
    const { event, isFetchingEvent, socialPopupOpen } = this.state;

    // Depending on snappiness of server, may not need to display loading
    if (isFetchingEvent) {
      return <div className={styles.loadingWrapper}><Loading /></div>;
    } else if (!event) {
      return <div className={styles.noDataMsg}>No event data</div>;
    }

    const {
      title,
      start_date: startDate,
      end_date: endDate,
      browser_url: browserUrl,
      featured_image_url: featuredImageUrl,
      description,
      location
    } = event;

    const featuredImageUrlOrDefault = (!devMode && featuredImageUrl) ?
      urlUtils.getImageUrl(featuredImageUrl, 'c_lfill,w_800') :
      '../static/img/default-event-600x360.png';

    /* eslint-disable jsx-a11y/no-static-element-interactions */
    return (
      <div className={styles.container}>
        <div className={styles.titleWrapper}>
          <DateBlock
            startDate={startDate}
            endDate={endDate}
          />
          <h1>{title}</h1>
          { location && location.locality &&
            <div className={styles.location}>{location.locality}, {location.region}</div>
          }
        </div>
        <div className={styles.content}>
          <div className={styles.left}>
            <img
              src={featuredImageUrlOrDefault}
              alt="featured event"
            />
          </div>

          <div className={styles.right}>
            <div className={styles.infoLinks}>
              { browserUrl &&
                <div className={styles.eventLink}>
                  <a
                    href={browserUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={styles.eventBtn}
                  >
                    EVENT PAGE
                  </a>
                </div>
              }
              <div className={styles.sharing}>
                <div
                  className={styles.shareBtnMobile}
                  onClick={this.toggleSocialPopup}
                  role="link"
                >
                  SHARE
                  <div
                    className={styles.popoverWrapper}
                    style={{ visibility: socialPopupOpen ? 'visible' : 'hidden' }}
                  >
                    <SocialBtns
                      picture={featuredImageUrl}
                      title={title}
                      startDate={startDate}
                      description={description}
                      iconSize={25}
                    />
                  </div>
                </div>
                <div>
                  <div className={styles.desktopSharing}>
                    <SocialBtns
                      picture={featuredImageUrl}
                      title={title}
                      startDate={startDate}
                      description={description}
                      iconSize={25}
                    />
                  </div>
                </div>
              </div>
              <div className={styles.locationAndDate}>
                {location && renderAddress(location)}
                {startDate && renderTimeRange(startDate, endDate)}
              </div>
            </div>
          </div>

          <div className={styles.description}>
            <p>
              {description}
            </p>
          </div>
        </div>
      </div>
    );
    /* eslint-enable jsx-a11y/no-static-element-interactions */
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
