import React, { Component, PropTypes } from 'react';
import FaMapMarker from 'react-icons/lib/fa/map-marker';

import styles from './EventLocationFilter.sass';

const distanceRange = [
  { value: 5, label: '5 miles' },
  { value: 10, label: '10 miles' },
  { value: 25, label: '25 miles' },
  { value: 100, label: '100 miles' },
  { value: 500, label: '500 miles' }
];

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
      range: distanceRange[1].value
    };
  }

  componentDidMount() {
    window.addEventListener('click', this.handleDocumentClick.bind(this));
  }

  componentWillUnmount() {
    window.removeEventListener('click', this.handleDocumentClick.bind(this));
  }

  // Close menu if clicking on the document (outside of the menu)
  handleDocumentClick() {
    this.setState({ menuOpen: false });
  }

  toggleMenu(e) {
    e.stopPropagation();
    this.setState({ menuOpen: !this.state.menuOpen });
  }

  clearForm() {
    // For this component
    this.setState({
      location: '',
      range: distanceRange[1].value,
      menuOpen: false
    });

    // For service request to use
    this.props.updateFilters({ location: null, range: null });
  }

  submitForm(e) {
    e.preventDefault();
    const { location, range } = this.state;
    this.props.updateFilters({ location, range });  // For service request to use
    this.setState({ menuOpen: false });  // close menu
  }

  render() {
    const { menuOpen, location, range } = this.state;

    /* eslint-disable jsx-a11y/no-static-element-interactions */

    return (
      <div className={styles.locationWrapper} onClick={e => e.stopPropagation()}>
        <button
          type="button"
          className={styles.toolbarBtn}
          onClick={this.toggleMenu.bind(this)}
        >
          <span>FILTER BY LOCATION</span>
          <span><FaMapMarker size={25} /></span>
        </button>

        <form
          style={{ visibility: menuOpen ? 'visible' : 'hidden' }}
          className={styles.popoverWrapper}
        >
          <div className={styles.inputGroup}>
            <label htmlFor="location">SET CITY OR ZIPCODE</label>
            <input
              type="text"
              name="location"
              value={location}
              onChange={e => this.setState({ location: e.target.value })}
              placeholder="City or Zipcode"
            />
          </div>
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
            <button
              type="button"
              className={styles.clearBtn}
              onClick={this.clearForm.bind(this)}
            >
              CLEAR
            </button>
            <button
              type="submit"
              className={styles.submitBtn}
              onClick={this.submitForm.bind(this)}
            >
              SET LOCATION
            </button>
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
