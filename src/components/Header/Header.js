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
    this.toggleModalState = this.toggleModalState.bind(this);
  }

  toggleModalState() {
    this.setState({ addEventModalOpen: !this.state.addEventModalOpen });
  }

  renderAddEventModal() {
    if (this.state.addEventModalOpen) {
      return <AddEvent closeModal={this.toggleModalState} onSubmit={postNewEvent} />;
    }
    return false;
  }

  render() {
    return (
      <header className={styles.header} >
        <div className={styles.headerLeftSection}>
          <Link to="/">
            <ResistanceLogo />
          </Link>
        </div>
        <div className={styles.headerRightSection}>
          <AddEventButton className="add-event-btn" handleButtonClick={this.toggleModalState} />
          {this.renderAddEventModal()}
        </div>
      </header>
    );
  }
}

Header.propTypes = {
};

export default Header;
