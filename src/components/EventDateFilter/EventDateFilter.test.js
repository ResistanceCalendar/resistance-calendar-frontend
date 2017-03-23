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
    const div = document.createElement('div');
    shallow(<EventDateFilter {...props} />, div);
  });

  it('shouldl call the updateFilters function prop', () => {
    const wrapper = shallow(<EventDateFilter {...props} />);
    wrapper.find('DatePicker').simulate('change');

    expect(props.updateFilters).toHaveBeenCalledTimes(1);
  });
});
