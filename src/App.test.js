import React from 'react';
import { render } from '@testing-library/react';
import App from './App';

test('renders support us', () => {
  const { getByText } = render(<App />);
  const text = getByText(/support/i);
  expect(text).toBeInTheDocument();
});

test('renders support us', () => {
  const { getByText } = render(<App />);
  const text = getByText(/support/i);
  expect(text).toBeInTheDocument();
});