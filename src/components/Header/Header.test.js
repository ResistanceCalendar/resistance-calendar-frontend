import React from 'react';
import { shallow } from 'enzyme';

import Header from './Header';

describe('Component: Header', () => {
  const props = {};

  it('renders without crashing', () => {
    expect(shallow(<Header {...props} />)).toHaveLength(1);
  });

  it('Add event form is closed by default', () => {
    const header = shallow(<Header {...props} />);

    expect(header.find('AddEvent')).toHaveLength(0);

    header.setState({ addEventModalOpen: true });

    expect(header.find('AddEvent')).toHaveLength(1);
  });

  it('Add event form is managed by state', () => {
    const header = shallow(<Header {...props} />);

    header.setState({ addEventModalOpen: true });

    expect(header.find('AddEvent')).toHaveLength(1);
  });
});
