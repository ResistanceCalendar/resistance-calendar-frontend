import React from 'react';
import { shallow } from 'enzyme';

import PrivacyPolicy from './PrivacyPolicy';

describe('Component: PrivacyPolicy', () => {
  it('renders without crashing', () => {
    const wrapper = shallow(<PrivacyPolicy />);
    expect(wrapper).toHaveLength(1);
  });

  it('should render h1 and p tags', () => {
    const wrapper = shallow(<PrivacyPolicy />);
    const h1 = wrapper.find('h1');
    const p = wrapper.find('p');

    expect(h1).toHaveLength(1);
    expect(p).toHaveLength(1);
  });
});
