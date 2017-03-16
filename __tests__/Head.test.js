import React from 'react';
import { render } from 'enzyme';

import { Head } from '../components';

it('renders without crashing', () => {
  const div = document.createElement('div');
  render(<Head />, div);
});
