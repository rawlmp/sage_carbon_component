import { render, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import CustomPod from './';

let component;

beforeEach(() => {
  const task = {
    title: {
      text: '15 August 2022 to 30 September 2022',
    },
    subtitle: {
      text: 'Due in 35 days on 08 January 2022',
      icon: null,
      author: null,
    },
    links: {},
    amount: {
      currency: 'GBP',
      amount: 4500,
    },
  };
  component = render(<CustomPod task={task} />);
});

test('CustomPod renders correctly', () => {
  expect(component).toBeTruthy();
});

test('Clicking Continue button', () => {
  const mockHandleClick = jest.fn();

  const button = component.getByText('Continue');
  button.addEventListener('click', mockHandleClick);

  fireEvent.click(button);

  expect(mockHandleClick.mock.calls).toHaveLength(1);
});
