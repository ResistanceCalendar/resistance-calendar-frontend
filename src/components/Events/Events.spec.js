import React from 'react';
import { shallow } from 'enzyme';

import Events from './Events';

describe('Component: Events', () => {
  let event = {};

  beforeEach(() => {
    event = {
      filters: {
        searchText: ''
      },
      isFetchingEvents: true,
      events: []
    };
  });

  it('renders without crashing', () => {
    const wrapper = shallow(<Events />);
    expect(wrapper).toHaveLength(1);
  });

  it('should render the loader before data is fetched', () => {
    const wrapper = shallow(<Events />);
    expect(wrapper.find('Loading')).toHaveLength(1);
  });

  it('should render EventFilters and EventsList components', () => {
    const wrapper = shallow(<Events />);

    wrapper.setState({ isFetchingEvents: false, event });

    const EventFilters = wrapper.find('EventFilters');
    const EventsList = wrapper.find('EventsList');

    expect(EventFilters).toHaveLength(1);
    expect(EventsList).toHaveLength(1);
  });
});
