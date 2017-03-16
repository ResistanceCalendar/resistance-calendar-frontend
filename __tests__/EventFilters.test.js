import React from 'react';
import { shallow } from 'enzyme';

import { EventFilters } from '../components';

describe('Component: EventFilters', () => {
  const props = {};

  beforeEach(() => {
    props.filters = {
      searchText: ''
    };
    props.updateFilters = () => {};
  });

  it('renders without crashing', () => {
    const wrapper = shallow(<EventFilters {...props} />);
    expect(wrapper).toHaveLength(1);
  });
});
