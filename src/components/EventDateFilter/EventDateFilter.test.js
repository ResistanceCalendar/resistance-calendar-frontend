import React from 'react';
import { shallow } from 'enzyme';

import EventDateFilter from './EventDateFilter';

describe('Component: <EventDateFilter />', () => {
  const props = {};

  beforeEach(() => {
    props.startDate = null;
    props.updateFilters = jest.fn();
  });

  it('renders without crashing', () => {
    const wrapper = shallow(<EventDateFilter {...props} />);
    expect(wrapper).toHaveLength(1);
  });

  it('should call the updateFilters function prop', () => {
    const wrapper = shallow(<EventDateFilter {...props} />);
    wrapper.find('t').simulate('change');

    expect(props.updateFilters).toHaveBeenCalledTimes(1);
  });
});
