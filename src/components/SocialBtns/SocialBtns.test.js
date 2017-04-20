import React from 'react';
import { shallow } from 'enzyme';

import SocialBtns from './SocialBtns';

describe('Component: SocialBtns', () => {
  const props = {};

  beforeEach(() => {
    props.picture = 'http://www.fillmurray.com/200/300';
    props.title = 'My Fake Event';
    props.description = 'Here is the excruciatingly vague description';
    props.iconSize = 25;
  });

  it('renders without crashing', () => {
    const wrapper = shallow(<SocialBtns {...props} />);
    expect(wrapper).toHaveLength(1);
  });

  it('renders links correctly', () => {
    const wrapper = shallow(<SocialBtns {...props} />);
    expect(wrapper.unrendered.props.picture).toEqual('http://www.fillmurray.com/200/300');
    expect(wrapper.unrendered.props.title).toEqual('My Fake Event');
    expect(wrapper.unrendered.props.description).toEqual('Here is the excruciatingly vague description');
    expect(wrapper.unrendered.props.iconSize).toEqual(25);
  });
});
