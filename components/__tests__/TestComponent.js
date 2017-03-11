import React from 'react'
import { render } from 'react-dom'

/* global it */
import App from '../TestComponent'

it('renders without crashing', () => {
  const div = document.createElement('div')
  render(<App />, div)
})
