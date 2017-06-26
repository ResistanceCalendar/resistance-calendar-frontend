import React from 'react';
import { shallow, mount } from 'enzyme';
import { MemoryRouter } from 'react-router';
import Header from './Header';

describe('Component: Header', () => {
  const props = {};

  it('renders without crashing', () => {
    expect(shallow(<Header {...props} />)).toHaveLength(1);
  });

  it('Add event form is closed by default', () => {
    const header = mount(<MemoryRouter><Header {...props} /></MemoryRouter>);

    expect(header.find('#modal-container').length).toBe(0);
    expect(header.find('AddEvent')).toHaveLength(0);

    header.find("button").simulate('click')

    expect(header.find('#modal-container').length).toBe(1);
    expect(header.find('AddEvent')).toHaveLength(1);
  });
});
