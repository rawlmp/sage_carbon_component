import { render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Amount from './';

test('Amount is rendered correctly', () => {
  const amount = {
    currency: 'USD',
    amount: '2000',
  };

  const component = render(<Amount {...amount} />);

  component.getByText('Amount due');
  component.getByText('$2,000.00');
});

test('Render $ on USD', () => {
  const amount = {
    currency: 'USD',
    amount: '0',
  };

  const component = render(<Amount {...amount} />);
  expect(component.container).toHaveTextContent('$');
});

test('Render € on EUR', () => {
  const amount = {
    currency: 'EUR',
    amount: '10',
  };

  const component = render(<Amount {...amount} />);
  expect(component.container).toHaveTextContent('€');
});

test('Render £ on GBP', () => {
  const amount = {
    currency: 'GBP',
    amount: '10',
  };

  const component = render(<Amount {...amount} />);
  expect(component.container).toHaveTextContent('£');
});

test('Render $ when null currency is passed', () => {
  const amount = {
    currency: null,
    amount: '10',
  };

  const component = render(<Amount {...amount} />);

  expect(component.container).toHaveTextContent('$');
});

test('Render $ when undefined currency is passed', () => {
  const amount = {
    currency: undefined,
    amount: '10',
  };

  const component = render(<Amount {...amount} />);

  expect(component.container).toHaveTextContent('$');
});
