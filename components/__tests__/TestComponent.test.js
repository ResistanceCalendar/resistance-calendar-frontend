import React from 'react'
import { shallow, mount, render } from 'enzyme'

import App from '../TestComponent'

it('renders without crashing', () => {
  const div = document.createElement('div')
  render(<App />, div)
})

describe('A suite', function() {
  it('should render without throwing an error', function() {
    expect(shallow(<App />).contains(<div className="foo">Bar</div>)).toBe(true)
  });

  it('should be selectable by class "foo"', function() {
    expect(shallow(<App />).is('.foo')).toBe(true)
  });

  it('should mount in a full DOM', function() {
    expect(mount(<App />).find('.foo').length).toBe(1)
  });

  it('should render to static HTML', function() {
    expect(render(<App />).text()).toEqual('Bar')
  });
})
