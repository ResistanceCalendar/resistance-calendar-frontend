import React from 'react';
import { shallow } from 'enzyme';

import EventFilters from './EventFilters';

describe('Component: EventFilters', () => {
  const props = {};

  beforeEach(() => {
    props.filters = {
      searchText: '',
      startDate: null,
      location: ''
    };
    props.updateFilters = jest.fn();
  });

  it('renders without crashing', () => {
    const wrapper = shallow(<EventFilters {...props} />);
    expect(wrapper).toHaveLength(1);
  });

  it('should render the 3 filter components', () => {
    const wrapper = shallow(<EventFilters {...props} />);
    const EventSearchInput = wrapper.find('EventSearchInput');
    const EventLocationFilter = wrapper.find('EventLocationFilter');
    const EventDateFilter = wrapper.find('EventDateFilter');

    expect(EventSearchInput).toHaveLength(1);
    expect(EventLocationFilter).toHaveLength(1);
    expect(EventDateFilter).toHaveLength(1);
  });
});
