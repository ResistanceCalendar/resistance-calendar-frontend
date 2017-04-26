import React from 'react';
import { shallow } from 'enzyme';

import EventLocationFilter from './EventLocationFilter';

describe('Component: <EventLocationFilter />', () => {
  const props = {};

  beforeEach(() => {
    props.updateFilters = jest.fn();
  });

  it('renders without crashing', () => {
    const div = document.createElement('div');
    shallow(<EventLocationFilter {...props} />, div);
  });

  it('should toggle the menu open and closed on button click', () => {
    const wrapper = shallow(<EventLocationFilter {...props} />);
    const btn = wrapper.find('button').first();

    expect(wrapper.state('menuOpen')).toBe(false);
    btn.simulate('click', { stopPropagation: () => {} });
    expect(wrapper.state('menuOpen')).toBe(true);
    btn.simulate('click', { stopPropagation: () => {} });
    expect(wrapper.state('menuOpen')).toBe(false);
  });

  it('should clear zipcode input and call onUpdate when clear btn is pressed', () => {
    const wrapper = shallow(<EventLocationFilter {...props} />);
    const btn = wrapper.find('input[type="button"]');  // second <button>

    btn.simulate('click');
    btn.simulate('click');
    expect(wrapper.state('location')).toBe('');
    expect(props.updateFilters).toHaveBeenCalledTimes(2);
  });

  it('should call the updateFilters func', () => {
    const wrapper = shallow(<EventLocationFilter {...props} />);
    wrapper.find('input[type="submit"]').simulate('click', { preventDefault: () => {} });

    expect(props.updateFilters).toHaveBeenCalledTimes(1);
    expect(wrapper.state('menuOpen')).toBe(false);
  });

  it('should properly set location error message state', () => {
    const wrapper = shallow(<EventLocationFilter {...props} />);

    const invalidZipcode1 = '123';
    const invalidZipcode2 = '123b5';
    const invalidZipcode3 = '123456';
    const invalidZipcode4 = '123 45';

    const validZipcode1 = '12345';

    // Invalid
    wrapper.instance().validateLocation(invalidZipcode1);
    expect(wrapper.state('locationErrorMsg')).toBeTruthy();

    wrapper.instance().validateLocation(invalidZipcode2);
    expect(wrapper.state('locationErrorMsg')).toBeTruthy();

    wrapper.instance().validateLocation(invalidZipcode3);
    expect(wrapper.state('locationErrorMsg')).toBeTruthy();

    wrapper.instance().validateLocation(invalidZipcode4);
    expect(wrapper.state('locationErrorMsg')).toBeTruthy();

    // Valid
    wrapper.instance().validateLocation(validZipcode1);
    expect(wrapper.state('locationErrorMsg')).toBeNull();
  });
});
