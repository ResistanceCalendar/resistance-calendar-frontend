import React from 'react'
import { render } from 'enzyme'

import App from '../Menu'

it('renders without crashing', () => {
  const div = document.createElement('div')
  render(<App />, div)
})
