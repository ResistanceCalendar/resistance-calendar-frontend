import React from 'react';

const ResistanceLogo = (props) => {
  const image = '../static/img/Logo-small.png';
  const style = {
    width: `${props.width}`,
    height: `${props.height}`
  };
  return (
    <div>
      <img src={image} style={style} alt='Logo for the Resistance Calendar' />
    </div>
  );
};

export default ResistanceLogo;

ResistanceLogo.defaultProps = {
  width: '100%',
  height: 'auto'
};
