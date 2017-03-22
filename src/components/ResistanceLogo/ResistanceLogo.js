import React, { PropTypes } from 'react';

const ResistanceLogo = (props) => {
  const image = '../static/img/Logo-large.png';
  const style = {
    width: `${props.width}`,
    height: `${props.height}`
  };

  return (
    <div>
      <img src={image} style={style} alt="Logo for the Resistance Calendar" />
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
