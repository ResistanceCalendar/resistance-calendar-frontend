import React from 'react';
import { shallow } from 'enzyme';

import EventLocationFilter from './EventLocationFilter';

describe('Component: <EventLocationFilter />', () => {
  const props = {};

  beforeEach(() => {
    props.updateFilters = jest.fn();
    props.location = '';
  });

  it('renders without crashing', () => {
    const div = document.createElement('div');
    shallow(<EventLocationFilter {...props} />, div);
  });

  it('should call the updateFilters func', () => {
    const wrapper = shallow(<EventLocationFilter {...props} />);
    wrapper.find('input').simulate('change', { target: { value: 'abc' } });
    expect(props.updateFilters).toHaveBeenCalledTimes(1);
  });
});
