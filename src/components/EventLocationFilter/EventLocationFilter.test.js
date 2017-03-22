import React from 'react';
import { render } from 'enzyme';

import EventLocationFilter from './EventLocationFilter';

it('renders without crashing', () => {
  const div = document.createElement('div');
  render(<EventLocationFilter />, div);
});
