import { render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Links from './';

test('Links are rendered correctly without props', () => {
  const component = render(<Links />);

  expect(component).toBeTruthy();
});

test('Text "No comments" when there are not comments', () => {
  const links = {
    files: [1, 2, 3],
    comments: [],
  };

  const component = render(<Links {...links} />);
  component.getByText('No comments');
});

test('Text "No files" when there are not files', () => {
  const links = {
    files: [],
    comments: [1, 2, 3],
  };

  const component = render(<Links {...links} />);
  component.getByText('No files');
});

test('Text "No files" and "No comments" when they are nullish', () => {
  const links = {
    files: null,
    comments: null,
  };

  const component = render(<Links {...links} />);
  component.getByText('No comments');
  component.getByText('No files');
});

test('Text "No files" and "No comments" when they are undefined', () => {
  const links = {
    files: undefined,
    comments: undefined,
  };

  const component = render(<Links {...links} />);
  component.getByText('No comments');
  component.getByText('No files');
});
