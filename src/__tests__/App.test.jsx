import React from 'react';
import { render, screen } from '@testing-library/react';
import App from '../App';

beforeEach(() => {
  render(<App />);
});

describe('Render App', () => {
  test('renders icon roomIcon', () => {
    const icon = screen.getByTestId('roomIcon');
    expect(icon).toBeInTheDocument();
  });
});
