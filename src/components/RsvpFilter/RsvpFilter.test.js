import React from 'react';
import { shallow } from 'enzyme';

import RsvpFilter from './RsvpFilter';

describe('Component: <RsvpFilter />', () => {
  const props = {};

  beforeEach(() => {
    props.startDate = null;
    props.updateFilters = jest.fn();
  });

  it('renders without crashing', () => {
    const wrapper = shallow(<RsvpFilter {...props} />);
    expect(wrapper).toHaveLength(1);
  });
});
