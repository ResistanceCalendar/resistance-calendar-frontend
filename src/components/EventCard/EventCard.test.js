import React from 'react';
import { shallow } from 'enzyme';

import EventCard from './EventCard';

describe('Component: EventCard', () => {
  const props = {};

  beforeEach(() => {
    props.event = {
      start_date: '2017-04-29T18:00:00-07:00',
      end_date: '2017-04-29T21:00:00-07:00'
    };
  });

  it('renders without crashing', () => {
    const wrapper = shallow(<EventCard {...props} />);
    expect(wrapper).toHaveLength(1);
  });

  it('renders Link and img components', () => {
    const wrapper = shallow(<EventCard {...props} />);

    expect(wrapper.find('Link')).toHaveLength(2);
    expect(wrapper.find('img')).toHaveLength(1);
  });

  it('displays the correct time format', () => {
    const wrapper = shallow(<EventCard {...props} />);
    expect(wrapper.text().toLowerCase()).toMatch('6:00 to 9:00 pm');
  });

  it('displays the correct time format for multi-day event', () => {
    props.event.end_date = '2017-04-30T21:00:00-07:00';
    const wrapper = shallow(<EventCard {...props} />);
    expect(wrapper.text().toLowerCase()).toMatch('6:00 pm apr 29 - 9:00 pm apr 30');
  });
});
