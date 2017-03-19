import React, { Component } from 'react';

const TextWrapper = (props) => {
  return (
    <span className='date-filter-text'>
      { props.children }
      <style jsx>
        {`
          .date-filter-text {
            font-size: 1.2em;
            font-weight: 700;
          }
        `}
      </style>
    </span>
  );
};

const Text = () => <TextWrapper>Date Filter Placeholder</TextWrapper>;

export default class EventDateFilter extends Component {
  render () {
    return (
      <div>
        <Text />
      </div>
    );
  }
}
