import React from 'react';
import { shallow } from 'enzyme';

import Loading from './Loading';

describe('Component: Loading', () => {
  it('renders without crashing', () => {
    const wrapper = shallow(<Loading />);
    expect(wrapper).toHaveLength(1);
  });
});
