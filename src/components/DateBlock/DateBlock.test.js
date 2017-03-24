import React from 'react';
import { shallow } from 'enzyme';

import DateBlock from './DateBlock';

describe('Component: DateBlock', () => {
  const props = {};

  beforeEach(() => {
    props.date = '2015-03-14T12:00:00Z';
  });

  it('renders without crashing', () => {
    const wrapper = shallow(<DateBlock {...props} />);
    expect(wrapper).toHaveLength(1);
  });

  it('renders left and right spans', () => {
    const wrapper = shallow(<DateBlock {...props} />);
    expect(wrapper.find('span')).toHaveLength(2);
  });
});
