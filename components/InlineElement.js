import React from 'react';

const InlineElement = (props) => {
  return (
    <div className='inline-container'>
      { props.children }
      <style jsx>
        {`
          .inline-container {
            display: inline-block;
            vertical-align: middle;
          }
        `}
      </style>
    </div>
  );
};

export default InlineElement;
