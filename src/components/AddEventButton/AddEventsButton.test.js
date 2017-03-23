import React from 'react';
import { shallow } from 'enzyme';

import MyComponent from './AddEventButton';

it('renders without crashing', () => {
  const div = document.createElement('div');
  shallow(<MyComponent />, div);
});
