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

    const modalContainer1 = header.find('#modal-container');
    const modalContainerDisplay1 = modalContainer1.node.props.style.display;

    expect(modalContainerDisplay1).toBe('none');

    header.setState({ addEventModalOpen: true });

    const modalContainer2 = header.find('#modal-container');
    const modalContainerDisplay2 = modalContainer2.node.props.style.display;

    expect(modalContainerDisplay2).toBe('block');
  });

  it('Add event form is managed by state', () => {
    const header = shallow(<Header {...props} />);

    header.setState({ addEventModalOpen: true });

    expect(header.find('AddEvent')).toHaveLength(1);
  });
});
