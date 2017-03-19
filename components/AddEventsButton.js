import React, { Component } from 'react';

const Text = () => <span>ADD EVENTS</span>;

export default class AddEventsButton extends Component {
  render () {
    return (
      <button className='btn-add-events'>
        <Text />
        <style jsx>
          {`
            .btn-add-events {
              color: var(--main-white);
              background-color: var(--main-green);
              font-weight: 600;
            }
          `}
        </style>
      </button>
    );
  }
}
