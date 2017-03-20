import React, { Component } from 'react';

const TextWrapper = (props) => {
  return (
    <span className='location-text'>
      { props.children }
      <style jsx>
        {`
          .location-text {
            font-size: 0.8em;
            font-weight: 700;
            display: inline-block;
            text-align: center;
            width: 20%;
            height: auto;
          }
        `}
      </style>
    </span>
  );
};

const NBSpace = () => <span>&nbsp;</span>;
const Text = () => <TextWrapper>FILTER<NBSpace />BY LOCATION</TextWrapper>;

export default class EventLocationFilter extends Component {
  render () {
    return (
      <div className='float-right'>
        <Text />
      </div>
    );
  }
}
