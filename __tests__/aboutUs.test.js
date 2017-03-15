import React from 'react'
import { render } from 'enzyme'

import AboutUs from '../pages/aboutUs'

it('renders without crashing', () => {
  const div = document.createElement('div')
  render(<AboutUs />, div)
})
