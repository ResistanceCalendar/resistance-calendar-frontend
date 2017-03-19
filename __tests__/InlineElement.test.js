import React from 'react';
import { render } from 'enzyme';

import MyComponent from '../components/InlineElement';

const WrappedComponent = (props) => {
  return (
    <MyComponent>
      Some Inline Text
    </MyComponent>
  );
};

it('renders without crashing', () => {
  const div = document.createElement('div');
  render(<WrappedComponent />, div);
});
