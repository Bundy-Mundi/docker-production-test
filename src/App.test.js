import React from 'react';
import { render } from '@testing-library/react';
import App from './App';

test('renders support us', () => {
  const { getByText } = render(<App />);
  const linkElement = getByText(/support/i);
  expect(linkElement).toBeInTheDocument();
});
