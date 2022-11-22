import { render, screen } from '@testing-library/react';
import React from 'react';
import App from '../App';

test('Should have h1', () => {
  render(<App />);
  expect(screen.getByText(/edit and save to reload\./i)).toBeInTheDocument();
});

test('Should have the banner', () => {
  render(<App />);
  expect(screen.getByRole('banner')).toBeInTheDocument();
});

test('Should have the link', () => {
  render(<App />);
  expect(
    screen.getByRole('link', {
      name: /learn react/i,
    }),
  ).toBeInTheDocument();
});
