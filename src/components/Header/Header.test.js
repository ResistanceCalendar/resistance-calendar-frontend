import React from 'react';
import { shallow } from 'enzyme';

import Header from './Header';

describe('Component: Header', () => {
  const props = {};
  props.pathName = '';

  it('renders without crashing', () => {
    const wrapper = shallow(<Header {...props} />);

    expect(wrapper).toHaveLength(1);
  });

  it('hides the "Add Events" button on the "Add Events" page', () => {
    props.pathName = '/add-event';
    const wrapper = shallow(<Header {...props} />);

    expect(wrapper.find('AddEventButton')).toHaveLength(0);
  });

  it('displays the "Add Events" button on the home page', () => {
    props.pathName = '/';
    const wrapper = shallow(<Header {...props} />);

    expect(wrapper.find('AddEventButton')).toHaveLength(1);
  });
});
