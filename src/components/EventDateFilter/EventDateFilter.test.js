import React from 'react';
import { render } from 'enzyme';

import EventDateFilter from './EventDateFilter';

it('renders without crashing', () => {
  const div = document.createElement('div');
  render(<EventDateFilter />, div);
});
