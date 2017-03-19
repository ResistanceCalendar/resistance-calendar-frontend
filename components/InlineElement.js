import React from 'react';

const InlineElement = (props) => {
  const style = {
    display: 'inline-block',
    verticalAlign: 'middle'
  };
  return (
    <div style={style}>
      { props.children }
    </div>
  );
};

export default InlineElement;
