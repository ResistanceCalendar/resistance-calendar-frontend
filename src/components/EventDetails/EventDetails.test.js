import React from 'react';
import { shallow } from 'enzyme';

import EventDetails from './EventDetails';
import { dateTimeUtils } from '../../utils';

describe('Component: EventDetails', () => {
  let event = {};
  const props = {};

  beforeEach(() => {
    props.match = { params: {} };
    event = {
      title: '',
      name: '',
      start_date: '2017-04-29T18:00:00-07:00',
      end_date: '2017-04-29T21:00:00-07:00',
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

  it('outputs the correct time format for single-day event', () => {
    expect(dateTimeUtils.displayTimeString(event.start_date, event.end_date).toLowerCase()).toBe('6:00 to 9:00 pm');
  });

  it('outputs the correct time format for multi-day event', () => {
    event.end_date = '2017-04-30T21:00:00-07:00';

    expect(dateTimeUtils.displayTimeString(event.start_date, event.end_date).toLowerCase()).toBe('6:00 pm apr 29 - 9:00 pm apr 30');
  });

  it('does not display as multi-day if start date is greater that end date', () => {
    event.end_date = '2017-04-28T21:00:00-07:00';

    expect(dateTimeUtils.displayTimeString(event.start_date, event.end_date).toLowerCase()).toBe('6:00 pm');
  });

  it('keeps linebreaks in descriptions', () => {
    event.description = `Protest Illiad.

      God, the Pence Administration sucks.
    `;

    const wrapper = shallow(<EventDetails {...props} />);
    wrapper.setState({ event, isFetchingEvent: false });

    expect(wrapper.html().includes('<br/>')).toBe(true);
  });
});
