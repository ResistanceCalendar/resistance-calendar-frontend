import React from 'react';
import { shallow } from 'enzyme';

import AddEvent from './AddEvent';

describe('Component: AddEvent', () => {
  const props = {};

  beforeEach(() => {
    props.event = {};
  });

  it('renders without crashing', () => {
    const wrapper = shallow(<AddEvent {...props} />);
    expect(wrapper).toHaveLength(1);
  });
});
