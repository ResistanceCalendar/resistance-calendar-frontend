import React from 'react';
import { shallow } from 'enzyme';

import RsvpBadge from './RsvpBadge';

describe('Component: RsvpBadge', () => {
  it('rounds to the nearest K when over 1000', () => {
    const props = { totalAccepted: 1200, type: 'desktopOnly' };
    const wrapper = shallow(<RsvpBadge {...props} />);
    expect(wrapper.text()).toEqual('1.2KRSVPS');
  });
});
