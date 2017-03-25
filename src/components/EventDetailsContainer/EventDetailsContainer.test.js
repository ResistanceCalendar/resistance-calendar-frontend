import React from 'react';
import { shallow } from 'enzyme';

import EventDetailsContainer from './EventDetailsContainer';

describe('Component: EventDetailsContainer', () => {
  const props = {};

  beforeEach(() => {
    props.match = { params: {} };
  });

  it('renders without crashing', () => {
    const wrapper = shallow(<EventDetailsContainer {...props} />);
    expect(wrapper).toHaveLength(1);
  });

  it('renders a Link to the home route and the event details', () => {
    const wrapper = shallow(<EventDetailsContainer {...props} />);
    const link = wrapper.find('Link[to="/"]');
    const eventDetails = wrapper.find('EventDetails');

    expect(link).toHaveLength(1);
    expect(eventDetails).toHaveLength(1);
  });
});
