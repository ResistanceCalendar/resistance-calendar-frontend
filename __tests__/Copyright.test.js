import React from 'react';
import { render } from 'enzyme';

import MyComponent from '../components/Copyright';

it('renders without crashing', () => {
  const div = document.createElement('div');
  render(<MyComponent year='3000' />, div);
});
