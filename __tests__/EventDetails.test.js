import React from 'react';
import { shallow } from 'enzyme';

import { EventDetails } from '../components';

describe('Component: EventDetails', () => {
  const props = {};

  beforeEach(() => {
    props.event = {
      title: '',
      name: '',
      start_date: '2015-03-14T12:00:00Z',
      end_date: '2015-03-14T14:00:00Z',
      share_url: '',
      browser_url: '',
      featured_image_url: '',
      summary: '',
      location: {
        address_lines: []
      }
    };
  });

  it('renders without crashing', () => {
    const wrapper = shallow(<EventDetails {...props} />);
    expect(wrapper).toHaveLength(1);
  });

  it('renders a DateBlock component', () => {
    const wrapper = shallow(<EventDetails {...props} />);
    expect(wrapper.find('DateBlock')).toHaveLength(1);
  });

  it('renders a Link component that routes to home', () => {
    const wrapper = shallow(<EventDetails {...props} />);
    const link = wrapper.find('[href="/"]');

    expect(link).toHaveLength(1);
  });
});
