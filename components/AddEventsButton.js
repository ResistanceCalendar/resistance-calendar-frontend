import React, { Component } from 'react';

const ButtonWrapper = (props) => {
  const style = {
    float: 'right',
    textAlign: 'right'
  };
  return (
    <div style={style}>
      { props.children }
    </div>
  );
};

const Text = () => <span>ADD EVENTS</span>;

export default class AddEventsButton extends Component {
  render () {
    const style = {
      color: '#ffffff',
      backgroundColor: '#23B09A',
      fontWeight: 600
    };
    return (
      <ButtonWrapper>
        <button style={style}>
          <Text />
        </button>
      </ButtonWrapper>
    );
  }
}
