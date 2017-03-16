import React from 'react';
import { render } from 'enzyme';

import Submit from '../pages/submit';

it('renders without crashing', () => {
  const div = document.createElement('div');
  render(<Submit />, div);
});
