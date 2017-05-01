import React from 'react';
import { shallow } from 'enzyme';

import DateBlock from './DateBlock';

describe('Component: DateBlock', () => {
  const props = {};

  beforeEach(() => {
    props.startDate = '2017-04-29T18:00:00-07:00';
    props.endDate = '2017-04-29T21:00:00-07:00';
  });

  it('renders without crashing', () => {
    const wrapper = shallow(<DateBlock {...props} />);
    expect(wrapper).toHaveLength(1);
  });

  it('renders left and right spans', () => {
    const wrapper = shallow(<DateBlock {...props} />);
    expect(wrapper.find('span')).toHaveLength(2);
  });

  it('renders the correct date format in the left box', () => {
    const wrapper = shallow(<DateBlock {...props} />);
    const leftSpanText = wrapper.children('span').at(0).text().toLowerCase();
    expect(leftSpanText).toBe('sat');
  });

  it('renders the correct date format in the left box', () => {
    const wrapper = shallow(<DateBlock {...props} />);
    const rightSpanText = wrapper.children('span').at(1).text().toLowerCase();
    expect(rightSpanText).toBe('apr 29');
  });

  it('renders the correct date format in the left box for multi-day events', () => {
    props.endDate = '2017-04-30T21:00:00-07:00';
    const wrapper = shallow(<DateBlock {...props} />);
    const rightSpanText = wrapper.children('span').at(0).text().toLowerCase();
    expect(rightSpanText).toBe('apr 29 -');
  });

  it('renders the correct date format in the right box for multi-day events', () => {
    props.endDate = '2017-04-30T21:00:00-07:00';
    const wrapper = shallow(<DateBlock {...props} />);
    const rightSpanText = wrapper.children('span').at(1).text().toLowerCase();
    expect(rightSpanText).toBe('apr 30');
  });
});
