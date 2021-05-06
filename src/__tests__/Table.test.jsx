import React from 'react';
import { render, screen } from '@testing-library/react';
import Table from '../components/Table';

beforeEach(() => {
  render(<Table />);
});

describe('Render Table', () => {
  test('renders text WE OFFER THE BEST MEALS AT THE BEST VALUE', () => {
    const text = screen.getByText('WE OFFER THE BEST MEALS AT THE BEST VALUE');
    expect(text).toBeInTheDocument();
  });
  test('renders text BOOK A TABLE', () => {
    const text = screen.getByText('BOOK A TABLE');
    expect(text).toBeInTheDocument();
  });
});
