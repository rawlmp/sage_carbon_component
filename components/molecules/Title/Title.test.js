import { render } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'
import Title from './'

test('Title renders correctly', () => {
  const component = render(<Title />)

  expect(component).toBeTruthy()
})

test('Renders "No title" when title is null', () => {
  const component = render(<Title />)

  expect(component.container).toHaveTextContent('No title')
})
