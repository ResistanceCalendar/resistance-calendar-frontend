import React from 'react';
import { shallow } from 'enzyme';

import EventCard from './EventCard';

describe('Component: EventCard', () => {
  const props = {};

  beforeEach(() => {
    props.event = {
      start_date: '2015-03-14T12:00:00Z'
    };
  });

  it('renders without crashing', () => {
    const wrapper = shallow(<EventCard {...props} />);
    expect(wrapper).toHaveLength(1);
  });

  it('renders Link and img components', () => {
    const wrapper = shallow(<EventCard {...props} />);

    expect(wrapper.find('Link')).toHaveLength(1);
    expect(wrapper.find('img')).toHaveLength(1);
  });
});
