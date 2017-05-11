import React, { Component, PropTypes } from 'react';
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

const defaultDistanceRange = distanceRange[3];

function renderDistanceOptions() {
  return distanceRange.map(distance =>
    <option key={distance.value} value={distance.value}>{distance.label}</option>
  );
}

class EventLocationFilter extends Component {
  constructor() {
    super();

    this.state = {
      menuOpen: false,
      location: '',
      range: defaultDistanceRange.value,
      locationErrorMsg: null
    };

    this._handleDocumentClick = this.handleDocumentClick.bind(this);
    this._onLocationBlur = this.onLocationBlur.bind(this);
    this._handleOnChangeLocation = this.handleOnChangeLocation.bind(this);
  }

  componentDidMount() {
    window.addEventListener('click', this._handleDocumentClick);
  }

  componentWillUnmount() {
    window.removeEventListener('click', this._handleDocumentClick);
  }

  onLocationBlur() {
    this.validateLocation(this.state.location);
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

  clearForm() {
    this.setState({
      location: '',
      range: defaultDistanceRange.value,
      menuOpen: false,
      locationErrorMsg: null
    });

    // For service request to update
    this.props.updateFilters({ location: null, range: null });
  }

  toggleMenu(e) {
    e.stopPropagation();
    this.setState({ menuOpen: !this.state.menuOpen });
  }

  // Close menu if clicking on the document (outside of the menu)
  handleDocumentClick() {
    this.setState({ menuOpen: false });
  }

  validateLocation(location) {
    const zipcodeRegex = /^\b\d{5}\b$/;

    if (zipcodeRegex.test(location)) {
      this.setState({ locationErrorMsg: null });
    } else {
      this.setState({ locationErrorMsg: 'You must enter a 5-digit zipcode' });
    }
  }

  submitForm(e) {
    e.preventDefault();
    const { location, range } = this.state;
    this.props.updateFilters({ location, range });  // For service request to use
    this.setState({ menuOpen: false });  // close menu
  }

  render() {
    const { menuOpen, location, range, locationErrorMsg } = this.state;
    const invalidForm = !!locationErrorMsg || location === '';

    /* eslint-disable jsx-a11y/no-static-element-interactions */

    return (
      <div className={styles.locationWrapper} onClick={e => e.stopPropagation()}>
        <button
          type="button"
          className={styles.toolbarBtn}
          onClick={this.toggleMenu.bind(this)}
        >
          <span>FILTER BY LOCATION</span>
          <span><FaMapMarker size={35} /></span>
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
              value={range}
              onChange={e => this.setState({ range: Number.parseInt(e.target.value, 10) })}
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
  updateFilters: PropTypes.func.isRequired
};

export default EventLocationFilter;
