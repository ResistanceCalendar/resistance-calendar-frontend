import React from 'react';
import { render } from 'enzyme';

import Contact from '../pages/contact';

it('renders without crashing', () => {
  const div = document.createElement('div');
  render(<Contact />, div);
});
