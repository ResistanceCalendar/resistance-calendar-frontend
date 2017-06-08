import React, { Component, PropTypes } from 'react';
import _ from 'lodash';
import FaMapMarker from 'react-icons/lib/fa/map-marker';

import styles from './EventLocationFilter.sass';

// Value in meters (what server expects)
const distanceRange = [
  { value: 8047, label: '5 miles' },
  { value: 16093, label: '10 miles' },
  { value: 40234, label: '25 miles' },
  { value: 80468, label: '50 miles' },
  { value: 160934, label: '100 miles' },
  { value: 804672, label: '500 miles' }
];
const defaultRangeIndex = 3;

function renderDistanceOptions() {
  return distanceRange.map(distance =>
    <option key={distance.value} value={distance.value}>{distance.label}</option>
  );
}

class EventLocationFilter extends Component {
  constructor(props) {
    super(props);

    // If URL location params, set them as defaults
    const { location: initialLocation, range: initialRange } = this.props;

    // match URL value up with dropdown option object
    const initialRangeOption = _.find(distanceRange, { value: initialRange });

    this.state = {
      menuOpen: false,
      location: initialLocation || '',
      range: initialRangeOption || distanceRange[defaultRangeIndex],
      locationErrorMsg: null
    };

    this.state.activeFilterMsg = initialLocation ? this.getActiveMessage(this.state.location, this.state.range) : '';

    this._handleDocumentClick = this.handleDocumentClick.bind(this);
    this._onLocationBlur = this.onLocationBlur.bind(this);
    this._handleRangeChange = this.handleRangeChange.bind(this);
    this._handleOnChangeLocation = this.handleOnChangeLocation.bind(this);
  }

  componentDidMount() {
    window.addEventListener('click', this._handleDocumentClick);
  }

  componentWillReceiveProps(nextProps) {
    // Set display based off of what current location and range props are
    if (nextProps.location && (nextProps.location !== this.props.location)) {
      this.setState({
        activeFilterMsg: this.getActiveMessage(nextProps.location, this.state.range)
      });
    }

    // In case where location is determined by geoLocation API or by query string, set it the first time here
    if (!this.state.location && nextProps.location) {
      this.setState({ location: nextProps.location });
    }
  }

  componentWillUnmount() {
    window.removeEventListener('click', this._handleDocumentClick);
  }

  onLocationBlur() {
    this.validateLocation(this.state.location);
  }

  getActiveMessage(location, range) {
    return (
      <dl className={styles.filterLabel}>
        <div>
          <dt>Location</dt>
          <dd>{location}</dd>
        </div>
        <div>
          <dt>Distance</dt>
          <dd>{range.label}</dd>
        </div>
      </dl>
    );
  }

  validateLocation(location) {
    const zipcodeRegex = /^\b\d{5}\b$/;

    if (zipcodeRegex.test(location)) {
      this.setState({ locationErrorMsg: null });
    } else {
      this.setState({ locationErrorMsg: 'You must enter a 5-digit zipcode' });
    }
  }

  // Close menu if clicking on the document (outside of the menu)
  handleDocumentClick() {
    this.setState({ menuOpen: false });
  }

  toggleMenu(e) {
    e.stopPropagation();
    this.setState({ menuOpen: !this.state.menuOpen });
  }

  handleRangeChange(e) {
    const range = distanceRange.find((set) => set.value === parseInt(e.target.value, 10));
    this.setState({ range });
  }

  clearForm() {
    this.setState({
      location: '',
      range: distanceRange[defaultRangeIndex],
      activeFilterMsg: false,
      menuOpen: false,
      locationErrorMsg: null
    });

    // For service request to update
    this.props.updateFilters({ location: null, range: distanceRange[defaultRangeIndex].value });
    this.props.disableGeoLocation();
  }

  handleOnChangeLocation(e) {
    // If user has entered exactly 5 digits, check to see if they're valid
    // this avoids user having to trigger input blur to have field validated
    const location = e.target.value;

    this.setState({ location }, () => {
      if (location.length === 5) {
        this.validateLocation(location);
      }
    });
  }

  submitForm(e) {
    if (e) e.preventDefault();
    const { location, range } = this.state;
    this.props.updateFilters({ location, range: range.value });  // For service request to use
    const activeMessage = this.getActiveMessage(location, range);
    this.props.disableGeoLocation();
    this.setState({ menuOpen: false, activeMessage });  // close menu
  }

  render() {
    const { menuOpen, location, range, locationErrorMsg, activeFilterMsg } = this.state;
    const invalidForm = !!locationErrorMsg || location === '';

    /* eslint-disable jsx-a11y/no-static-element-interactions */

    return (
      <div className={styles.locationWrapper} onClick={e => e.stopPropagation()}>
        <button
          type="button"
          className={styles.toolbarBtn}
          onClick={this.toggleMenu.bind(this)}
        >
          {
            activeFilterMsg || <span>FILTER BY LOCATION</span>
          }
          <span><FaMapMarker size={25} /></span>
        </button>

        <form
          style={{ visibility: menuOpen ? 'visible' : 'hidden' }}
          className={styles.popoverWrapper}
        >
          <fieldset>
            <div className={styles.inputGroup}>
              <label htmlFor="location">ENTER ZIPCODE</label>
              <input
                type="text"
                name="location"
                value={location}
                onChange={this._handleOnChangeLocation}
                onBlur={this._onLocationBlur}
                required
                placeholder="Enter zipcode"
              />
            </div>
            <div className={styles.errorMsg}>{locationErrorMsg}</div>
          </fieldset>
          <div className={styles.inputGroup}>
            <label htmlFor="range">SET RANGE</label>
            <select
              name="range"
              value={range.value}
              onChange={this._handleRangeChange}
            >
              {renderDistanceOptions()}
            </select>
          </div>
          <div className={styles.formBtns}>
            <input
              type="button"
              value="CLEAR"
              className={styles.clearBtn}
              onClick={this.clearForm.bind(this)}
            />
            <input
              type="submit"
              value="SET LOCATION"
              className={styles.submitBtn}
              disabled={invalidForm}
              onClick={this.submitForm.bind(this)}
            />
          </div>
        </form>
      </div>
    );

    /* eslint-enable jsx-a11y/no-static-element-interactions */
  }
}

EventLocationFilter.propTypes = {
  disableGeoLocation: PropTypes.func,
  updateFilters: PropTypes.func.isRequired,
  location: PropTypes.string,
  range: PropTypes.number
};

export default EventLocationFilter;
export { distanceRange, defaultRangeIndex };
