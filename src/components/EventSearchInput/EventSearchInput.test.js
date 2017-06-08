import React from 'react';
import { shallow } from 'enzyme';

import EventSearchInput from './EventSearchInput';

describe('Component: EventSearchInput', () => {
  const props = {};

  beforeEach(() => {
    props.filterInput = '';
    props.updateFilters = jest.fn();
  });

  it('renders without crashing', () => {
    const wrapper = shallow(<EventSearchInput {...props} />);
    expect(wrapper).toHaveLength(1);
  });

  it('should call the updateFilter func onInput', () => {
    const wrapper = shallow(<EventSearchInput {...props} />);
    wrapper.find('input').simulate('change', { target: { value: 'abc' } });

    expect(props.updateFilters).toBeCalled();
  });
});
