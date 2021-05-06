import React from 'react';
import { render, screen } from '@testing-library/react';
import Foods from '../components/Foods';

beforeEach(() => {
  render(<Foods />);
});

describe('Render Foods', () => {
  test('renders text PIZZA', () => {
    const text = screen.getByText('PIZZA');
    expect(text).toBeInTheDocument();
  });
});
