import React from 'react';
import { shallow } from 'enzyme';

import { EventSearchInput } from '../components';

describe('Component: EventSearchInput', () => {
  const props = {};

  beforeEach(() => {
    props.filterInput = '';
    props.updateFilters = () => {};
  });

  it('renders without crashing', () => {
    const wrapper = shallow(<EventSearchInput {...props} />);
    expect(wrapper).toHaveLength(1);
  });
});
