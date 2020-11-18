import React from 'react'
import { render } from '@testing-library/react'
import App from './App'

test('renders app without error', () => {
  const { getByTestId } = render(<App />)

  expect(getByTestId('weather')).toBeInTheDocument()
})
