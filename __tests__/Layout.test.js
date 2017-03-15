import React from 'react';
import { render } from 'enzyme';

import Layout from '../components/Layout';

it('renders without crashing', () => {
  const div = document.createElement('div');
  render(<Layout />, div);
});
