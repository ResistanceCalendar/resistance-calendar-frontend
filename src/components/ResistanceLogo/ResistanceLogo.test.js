import React from 'react';
import { render } from 'enzyme';

import MyComponent from './ResistanceLogo';

it('renders without crashing', () => {
  const div = document.createElement('div');
  render(<MyComponent width="50%" height="auto" />, div);
});
