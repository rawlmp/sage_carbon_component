import { render } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'
import Subtitle from './'

test('Subtitle is rendered', () => {
  const component = render(<Subtitle />)

  expect(component).toBeTruthy()
})

test('Subtitle receives a null icon value and renders default icon "calendar"', () => {
  const props = {
    icon: null
  }
  const component = render(<Subtitle {...props} />)

  expect(
    component.container.querySelector('[data-component="icon"]')
  ).toHaveAttribute('type', 'calendar')
})

test('Subtitle receives a null author value and renders "Anonymous starter"', () => {
  const props = {
    author: null
  }
  const component = render(<Subtitle {...props} />)

  expect(component.container).toHaveTextContent('Anonymous starter')
})
