import React from 'react';
import { Link } from 'react-router-dom';

import styles from './AddEventButton.sass';

const AddEventButton = () => {
  return (
    <Link to="add-event" className={styles.btnAddEvents}>
      ADD EVENTS
    </Link>
  );
};

AddEventButton.propTypes = {};

export default AddEventButton;
