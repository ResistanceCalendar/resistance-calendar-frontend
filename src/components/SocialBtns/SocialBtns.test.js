import React from 'react';
import { shallow, mount } from 'enzyme';

import SocialBtns from './SocialBtns';

describe('Component: SocialBtns', () => {
  const props = {};

  beforeEach(() => {
    props.fbLink = 'https://www.facebook.com/events/1768430223445649';
    props.twitterLink = 'https://twitter.com';
    props.iconSize = 25;
  });

  it('renders without crashing', () => {
    const wrapper = shallow(<SocialBtns {...props} />);
    expect(wrapper).toHaveLength(1);
  });

  it('renders links correctly', () => {
    const wrapper = mount(<SocialBtns {...props} />);
    expect(wrapper.prop('fbLink')).toEqual('https://www.facebook.com/events/1768430223445649');
    expect(wrapper.prop('twitterLink')).toEqual('https://twitter.com');
    expect(wrapper.prop('iconSize')).toEqual(25);
  });
});
