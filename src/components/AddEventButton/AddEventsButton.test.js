import React from 'react';
import { shallow } from 'enzyme';

import AddEventButton from './AddEventButton';


describe('Component: <AddEventsButton />', () => {
  const props = {};

  beforeEach(() => {
    props.handleButtonClick = jest.fn();
  });

  it('renders without crashing', () => {
    shallow(<AddEventButton {...props} />, document.createElement('div'));
  });

  it('handleButtonClick called on click', () => {
    shallow(<AddEventButton {...props} />).simulate('click');
    expect(props.handleButtonClick).toHaveBeenCalledTimes(1);
  });
});
