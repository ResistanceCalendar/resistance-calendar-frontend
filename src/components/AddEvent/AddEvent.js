import React, { Component, PropTypes } from 'react';
import { Redirect } from 'react-router-dom';

import styles from './AddEvent.sass';

class AddEvent extends Component {

  constructor(props) {
    super(props);
    this.state = {
      email: '',
      eventName: '',
      eventLink: '',
      notes: '',
      submitted: false,
      emailErrorMessage: null,
      eventLinkErrorMessage: null,
      submissionErrorMessage: null,
    };
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleInputBlur = this.handleInputBlur.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleInputChange(e) {
    const target = e.target;
    this.setState({ [target.name]: target.value });
  }

  handleInputBlur() {
    // eslint-disable-next-line max-len
    const urlRegex = /^(?:(?:(?:https?|ftp|):\/\/)?)(?:\S+(?::\S*)?@)?(?:(?!(?:10|127)(?:\.\d{1,3}){3})(?!(?:169\.254|192\.168)(?:\.\d{1,3}){2})(?!172\.(?:1[6-9]|2\d|3[0-1])(?:\.\d{1,3}){2})(?:[1-9]\d?|1\d\d|2[01]\d|22[0-3])(?:\.(?:1?\d{1,2}|2[0-4]\d|25[0-5])){2}(?:\.(?:[1-9]\d?|1\d\d|2[0-4]\d|25[0-4]))|(?:(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)(?:\.(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)*(?:\.(?:[a-z\u00a1-\uffff]{2,})))(?::\d{2,5})?(?:[/?#]\S*)?$/i;
    const emailRegex = /^[a-zA-Z0-9]+@[a-zA-Z0-9]+\.[A-Za-z]+$/;
    this._validateInput(urlRegex, 'eventLink', 'You must enter a valid url.');
    this._validateInput(emailRegex, 'email', 'You must enter a valid email.');
  }

  _validateInput(regex, attribute, message) {
    const currentAttribute = this.state[attribute];
    let errorMessage = message;
    if (regex.test(currentAttribute) || currentAttribute === '') {
      errorMessage = null;
    }
    this.setState({ [`${attribute}ErrorMessage`]: errorMessage });
  }

  handleSubmit(e) {
    e.preventDefault();
    const { eventName, email, eventLink, notes } = this.state;

    this.props.onSubmit({
      eventLink,
      email,
      notes,
      _subject: eventName,
    }).then((response) => {
      if (response.status === 200) {
        this.setState({ submitted: true });
        this.props.closeModal();
      } else {
        throw response;
      }
    })
    .catch(() => {
      this.setState({ submissionErrorMessage: 'Whoops. There was a problem and your form was not submitted.' });
    });
  }

  render() {
    const {
      eventName,
      eventLink,
      notes,
      email,
      emailErrorMessage,
      eventLinkErrorMessage
    } = this.state;
    const invalidForm = !!emailErrorMessage || !!eventLinkErrorMessage || eventName === '' || eventLink === '' || email === '';

    if (this.state.submitted) {
      return <Redirect to={{ pathname: '/thank-you' }} />;
    }

    return (
      <form id={styles.addEventForm} >
        <fieldset className={styles.fieldset}>
          <label htmlFor="eventName">
            Event Title:
            <input
              type="text"
              name="eventName"
              placeholder="Enter event name here..."
              value={eventName}
              required
              onChange={this.handleInputChange}
            />
          </label>
        </fieldset>
        <fieldset className={styles.fieldset}>
          <label htmlFor="eventLink">
            Event Link:
            <input
              type="text"
              name="eventLink"
              placeholder="Place event link here ..."
              value={eventLink}
              required
              onChange={this.handleInputChange}
              onBlur={this.handleInputBlur}
            />
            <div className={styles.error}>{eventLinkErrorMessage}</div>
          </label>
        </fieldset>
        <fieldset className={styles.fieldset}>
          <label htmlFor="notes">
            Notes:
            <textarea
              name="notes"
              placeholder="(Optional)"
              value={notes}
              onChange={this.handleInputChange}
            />
          </label>
        </fieldset>
        <fieldset className={styles.fieldset}>
          <label htmlFor="email">
            Your Email:
            <input
              type="text"
              name="email"
              placeholder="Enter email address..."
              value={email}
              required
              onChange={this.handleInputChange}
              onBlur={this.handleInputBlur}
            />
            <div className={styles.error}>{emailErrorMessage}</div>
          </label>
        </fieldset>
        <fieldset className={styles.fieldset}>
          <div id={styles.buttonsContainer}>
            <input
              type="submit"
              value="Submit"
              disabled={invalidForm}
              onClick={this.handleSubmit}
            />
            <input
              value="Cancel"
              type="button"
              className={styles.cancelBtn}
              onClick={this.props.closeModal}
            />
          </div>
          <div className={styles.error}>{this.state.submissionErrorMessage}</div>
        </fieldset>
      </form>
    );
  }
}

AddEvent.propTypes = {
  closeModal: PropTypes.func.isRequired,
  onSubmit: PropTypes.func.isRequired
};

export default AddEvent;
