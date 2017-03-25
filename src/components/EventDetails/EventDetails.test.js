import React from 'react';
import { shallow } from 'enzyme';

import EventDetails from './EventDetails';

describe('Component: EventDetails', () => {
  let event = {};
  const props = {};

  beforeEach(() => {
    props.match = { params: {} };
    event = {
      title: '',
      name: '',
      start_date: '2015-03-14T12:00:00Z',
      end_date: '2015-03-14T14:00:00Z',
      share_url: '',
      browser_url: '',
      featured_image_url: '',
      summary: '',
      loc: {
        address_lines: []
      }
    };
  });

  it('renders without crashing', () => {
    const wrapper = shallow(<EventDetails {...props} />);
    expect(wrapper).toHaveLength(1);
  });

  it('renders an single div component by default', () => {
    const wrapper = shallow(<EventDetails {...props} />);
    expect(wrapper.find('Loading')).toHaveLength(1);
  });

  it('renders a DateBlock component', () => {
    const wrapper = shallow(<EventDetails {...props} />);
    wrapper.setState({ event, isFetchingEvent: false });

    expect(wrapper.find('DateBlock')).toHaveLength(1);
  });

  it('renders a single div when there\'s no data after fetch', () => {
    const wrapper = shallow(<EventDetails {...props} />);
    wrapper.setState({ isFetchingEvent: false });

    expect(wrapper.find('div')).toHaveLength(1);
  });
});
