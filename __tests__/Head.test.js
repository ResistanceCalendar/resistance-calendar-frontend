import React from 'react';
import { render } from 'enzyme';

import Head from '../components/Head';

it('renders without crashing', () => {
  const div = document.createElement('div');
  render(<Head />, div);
});
