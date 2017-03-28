import React, { Component } from 'react';
import axios from 'axios';

import styles from './AddEvent.sass';


class AddEvent extends Component {

  constructor(props) {
    super(props);
    this.state = {
      eventName: '',
      email: '',
      eventLink: '',
      notes: '',
      submitted: null,
      errorMessage: {
        email: null,
        eventLink: null,
        submission: null
      }
    };
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleInputChange(e) {
    const target = e.target;

    this.setState({ [target.name]: target.value },
      () => {
        if (target.name === 'email') {
          this.validateEmail();
        }
        if (target.name === 'eventLink') {
          this.validateLink();
        }
      }
    );
  }

  validateEmail() {
    const emailRegex = /^[a-zA-Z0-9]+@[a-zA-Z0-9]+\.[A-Za-z]+$/;
    this.validateInput(emailRegex, 'email', 'You must enter a valid email.');
  }

  validateLink() {
    // eslint-disable-next-line max-len
    const urlRegex = /^(?:(?:(?:https?|ftp):)?\/\/)(?:\S+(?::\S*)?@)?(?:(?!(?:10|127)(?:\.\d{1,3}){3})(?!(?:169\.254|192\.168)(?:\.\d{1,3}){2})(?!172\.(?:1[6-9]|2\d|3[0-1])(?:\.\d{1,3}){2})(?:[1-9]\d?|1\d\d|2[01]\d|22[0-3])(?:\.(?:1?\d{1,2}|2[0-4]\d|25[0-5])){2}(?:\.(?:[1-9]\d?|1\d\d|2[0-4]\d|25[0-4]))|(?:(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)(?:\.(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)*(?:\.(?:[a-z\u00a1-\uffff]{2,})))(?::\d{2,5})?(?:[/?#]\S*)?$/i;
    this.validateInput(urlRegex, 'eventLink', 'You must enter a valid url.');
  }

  validateInput(regex, attribute, message) {
    // make a shallow copy to prevent modification of existing errorMessage
    const newErrorMessage = Object.assign({}, this.state.errorMessage);
    const currentAttribute = this.state[attribute];
    if (regex.test(currentAttribute) || currentAttribute.length === 0) {
      newErrorMessage[attribute] = null;
    } else {
      newErrorMessage[attribute] = message;
    }
    this.setState({ errorMessage: newErrorMessage });
  }

  handleSubmit(event) {
    // See API at https://formspree.io/
    event.preventDefault();
    const { eventName, email, eventLink, notes } = this.state;
    axios.post(`https://formspree.io/${process.env.FORMSPREE_EMAIL}`, {
      eventLink,
      email,
      notes,
      _subject: eventName,
    })
    .then((response) => {
      if (response.status === 200) {
        this.setState({ submitted: true });
      }
    })
    .catch((error) => {
      // eslint-disable-next-line no-console
      console.log(error);
      this.setState({ errorMessage: { submission: 'Whoops. There was a problem and your form was not submitted.' } });
    });
  }

  render() {
    if (this.state.submitted) {
      return <div>Thank you! Your submission has been submitted for review. </div>;
    }
    return (
      <form
        id={styles.addEventForm}
        onSubmit={this.handleSubmit.bind(this)}
      >
        <h1>Event Form</h1>
        <fieldset className={styles.fieldset}>
          <label htmlFor="eventName">Event Name</label>
          <input
            type="text"
            name="eventName"
            value={this.state.eventName}
            required
            onChange={this.handleInputChange}
          />
        </fieldset>
        <fieldset className={styles.fieldset}>
          <label htmlFor="email">Your Email</label>
          <input
            type="text"
            name="email"
            value={this.state.email}
            required
            onChange={this.handleInputChange}
          />
          <div className={styles.error}>{this.state.errorMessage.email}</div>
        </fieldset>
        <fieldset className={styles.fieldset}>
          <label htmlFor="eventLink">Link to Event</label>
          <input
            type="text"
            name="eventLink"
            value={this.state.eventLink}
            required
            onChange={this.handleInputChange}
          />
          <div className={styles.error}>{this.state.errorMessage.eventLink}</div>
        </fieldset>
        <fieldset className={styles.fieldset}>
          <label htmlFor="notes">Notes or Comments</label>
          <textarea
            name="notes"
            value={this.state.notes}
            onChange={this.handleInputChange}
          />
        </fieldset>
        <fieldset className={styles.fieldset}>
          <input type="submit" value="Submit" />
          <div className={styles.error}>{this.state.errorMessage.submission}</div>
        </fieldset>
      </form>
    );
  }
}

export default AddEvent;
