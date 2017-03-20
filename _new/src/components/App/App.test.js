import React from 'react';
import { shallow } from 'enzyme';

import App from './App';

describe('Component: <App />', () => {
  it('should render', () => {
    const wrapper = shallow(<App><div /></App>);

    expect(wrapper).toHaveLength(1);
  });

  it('should render it\'s children', () => {
    const wrapper = shallow(<App><div className="child" /></App>);
    const children = wrapper.find('.child');

    expect(children).toHaveLength(1);
  });
});
