import React from 'react';
import { shallow } from 'enzyme';

import EventsList from './EventsList';

describe('Component: EventsList', () => {
  it('renders without crashing', () => {
    const wrapper = shallow(<EventsList events={[]} filters={{}} />);
    expect(wrapper).toHaveLength(1);
  });

  describe('should display appropriate no event message', () => {
    it('...given location and no searchText', () => {
      const filters = {
        location: 'nowhere'
      };
      const wrapper = shallow(<EventsList events={[]} filters={filters} />);
      expect(wrapper.text()).toEqual('No events are coming up... Try setting a larger distance range');
    });

    it('...given searchText and no location', () => {
      const filters = {
        searchText: 'asdfasdf'
      };
      const wrapper = shallow(<EventsList events={[]} filters={filters} />);
      expect(wrapper.text()).toEqual('No events are coming up... Try searching for something else');
    });

    it('...given searchText and location', () => {
      const filters = {
        location: 'nowhere',
        searchText: 'adsfasdf'
      };
      const wrapper = shallow(<EventsList events={[]} filters={filters} />);
      expect(wrapper.text()).toEqual('No events are coming up... Try searching for something else or setting a larger distance range');
    });

    it('...given no filters', () => {
      const wrapper = shallow(<EventsList events={[]} filters={{}} />);
      expect(wrapper.text()).toEqual('No events are coming up... ');
    });
  });
});
