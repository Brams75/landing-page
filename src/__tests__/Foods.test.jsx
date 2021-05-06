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
  test('renders text FISH', () => {
    const text = screen.getByText('FISH');
    expect(text).toBeInTheDocument();
  });
  test('renders text PASTA', () => {
    const text = screen.getByText('PASTA');
    expect(text).toBeInTheDocument();
  });
});
