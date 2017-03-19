import React from 'react';

const CopyrightYear = (props) => <span>{props.year} </span>;
const CopyrightSymbol = () => <span>&copy; </span>;
const CopyrightText = () => <span>The Resistance Calendar</span>;

const Copyright = (props) => {
  return (
    <p>
      <CopyrightSymbol />
      <CopyrightYear year={props.year} />
      <CopyrightText />
    </p>
  );
};

export default Copyright;
