import React from 'react';
import { shallow } from 'enzyme';

import SocialBtns from './SocialBtns';

describe('Component: SocialBtns', () => {
  const props = {};

  it('renders without crashing', () => {
    const wrapper = shallow(<SocialBtns {...props} />);
    expect(wrapper).toHaveLength(1);
  });
});
