import React from 'react';

const ImageWrapper = (props) => {
  const style = {
    padding: 0,
    margin: 0
  };
  return (
    <div style={style}>
      { props.children }
    </div>
  );
};

const ResistanceLogo = (props) => {
  const image = 'static/img/Logo-small.png';
  const style = {
    width: `${props.width}`,
    height: `${props.height}`
  };
  return (
    <ImageWrapper>
      <img src={image} style={style} alt='Logo for the Resistance Calendar' />
    </ImageWrapper>
  );
};

export default ResistanceLogo;

ResistanceLogo.defaultProps = {
  width: '100%',
  height: 'auto'
};
