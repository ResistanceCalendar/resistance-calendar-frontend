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

  it('should render disabled \'load more events\' button after click', () => {
    const wrapper = shallow(<Events />);

    // To have events (instead of Loading component) rendered
    wrapper.setState({ isFetchingEvents: false, event });

    const btn1 = wrapper.find('button');
    const loading1 = wrapper.find('Loading');
    expect(btn1).toHaveLength(1);
    expect(loading1).toHaveLength(0);

    // As if "Load More" button was clicked
    wrapper.setState({ isFetchingMoreEvents: true });

    const btn2 = wrapper.find('button');
    const loading2 = wrapper.find('Loading');
    expect(btn2).toHaveLength(0);
    expect(loading2).toHaveLength(1);
  });
});
