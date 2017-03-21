import React from 'react';
import { render } from 'enzyme';

import Copyright from './Copyright';

it('renders without crashing', () => {
  const div = document.createElement('div');
  render(<Copyright year={3000} />, div);
});
