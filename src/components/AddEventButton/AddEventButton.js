import React from 'react';

import styles from './AddEventButton.sass';

const AddEventButton = () => {
  return (
    <button className={styles.btnAddEvents}>
      ADD EVENTS
    </button>
  );
};

AddEventButton.propTypes = {};

export default AddEventButton;
