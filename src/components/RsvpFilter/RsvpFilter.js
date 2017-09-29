import React, { PropTypes, Component } from 'react';
import styles from './RsvpFilter.sass';

const displayName = {
  'total_accepted': 'size',
  'start_date desc': 'date'
}

class RsvpFilter extends Component {
  constructor(props) {
    super(props);

    this.state = {
      rsvpModalOpen: false,
      sortOption: this.props.sortOption
    };
    this.toggleModalState = this.toggleModalState.bind(this);
    this.sortEvents = this.sortEvents.bind(this);
    this._handleDocumentClick = this.handleDocumentClick.bind(this);

  }
  toggleModalState(e) {
    e.stopPropagation();
    this.setState({
      rsvpModalOpen: !this.state.rsvpModalOpen
    });
  }

  // Close menu if clicking on the document (outside of the menu)
  handleDocumentClick() {
    this.setState({ rsvpModalOpen: false });
  }

  componentDidMount() {
    window.addEventListener('click', this._handleDocumentClick);
  }

  componentWillUnmount() {
    window.removeEventListener('click', this._handleDocumentClick);
  }

  sortEvents(attribute) {
    this.toggleModalState();
    this.setState({sortOption: attribute});
    this.props.updateFilters({orderby: attribute});
  }

  renderSortFilterModal() {
    // Change visibility instead of destroying component to main component's state in case modal is closed by accident
    return (
      <div className={styles.modalContainer} style={{ display: this.state.rsvpModalOpen ? 'block' : 'none' }}>
        <input
          type="button"
          className={styles.sizeButton}
          value="Event Size"
          onClick={()=> this.sortEvents('total_accepted')}
        />
        <input
          type="button"
          className={styles.dateButton}
          value="Date"
          onClick={()=> this.sortEvents('start_date desc')}
        />
      </div>
    );
  }

  render() {
    return (
      <div className={styles.rsvpFilter}>
        <button onClick={this.toggleModalState}>
          <span>Sorted By: {displayName[this.state.sortOption]}</span>
        </button>
        { this.state.rsvpModalOpen && this.renderSortFilterModal() }
      </div>
    );
  }
};

RsvpFilter.propTypes = {
  updateFilters: PropTypes.func.isRequired,
  sortOption: PropTypes.string
};

export default RsvpFilter;
