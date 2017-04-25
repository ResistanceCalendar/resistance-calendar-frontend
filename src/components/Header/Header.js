import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

import { ResistanceLogo, AddEventButton, AddEvent } from '../';
import styles from './Header.sass';

const postNewEvent = (payload) => {
  return axios.post(`https://formspree.io/${process.env.FORMSPREE_EMAIL}`, payload);
};

class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
      addEventModalOpen: false
    };

    this._handleDocumentClick = this.handleDocumentClick.bind(this);
    this.toggleModalState = this.toggleModalState.bind(this);
  }

  componentDidMount() {
    window.addEventListener('click', this._handleDocumentClick);
  }

  componentWillUnmount() {
    window.removeEventListener('click', this._handleDocumentClick);
  }

  // Close menu if clicking on the document (outside of the menu)
  handleDocumentClick() {
    this.setState({ addEventModalOpen: false });
  }

  toggleModalState() {
    this.setState({ addEventModalOpen: !this.state.addEventModalOpen });
  }

  renderAddEventModal() {
    // Change visibility instead of destroying component to main component's state in case modal is closed by accident
    return (
      <div id="modal-container" style={{ display: this.state.addEventModalOpen ? 'block' : 'none' }}>
        <AddEvent closeModal={this.toggleModalState} onSubmit={postNewEvent} />
      </div>
    );
  }

  render() {
    /* eslint-disable jsx-a11y/no-static-element-interactions */
    return (
      <header className={styles.header}>
        <div className={styles.headerLeftSection}>
          <Link to="/">
            <ResistanceLogo />
          </Link>
        </div>
        <div className={styles.headerRightSection} onClick={e => e.stopPropagation()}>
          <AddEventButton className="add-event-btn" handleButtonClick={this.toggleModalState} />
          {this.renderAddEventModal()}
        </div>
      </header>
    );
    /* eslint-enable jsx-a11y/no-static-element-interactions */
  }
}

Header.propTypes = {
};

export default Header;
