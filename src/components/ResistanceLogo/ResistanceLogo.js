import React, { PropTypes } from 'react';

const ResistanceLogo = (props) => {
  const image = '../static/img/Logo-large.png';
  const style = {
    maxWidth: `${props.width}`,
    height: `${props.height}`
  };

  return (
    <div style={style}>
      <img src={image} style={{ width: '100%' }} alt="Logo for the Resistance Calendar" />
    </div>
  );
};

ResistanceLogo.defaultProps = {
  width: '100%',
  height: 'auto'
};

ResistanceLogo.propTypes = {
  width: PropTypes.string,
  height: PropTypes.string
};

export default ResistanceLogo;
