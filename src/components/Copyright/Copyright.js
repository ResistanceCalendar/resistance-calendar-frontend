import React, { PropTypes } from 'react';

const Copyright = (props) => {
  return (
    <p>
      <span>&copy; </span>
      <span>{props.year}</span>
      <span>The Resistance Calendar</span>
    </p>
  );
};

Copyright.propTypes = {
  year: PropTypes.number.isRequired
};

export default Copyright;
