import React from 'react';
import { render, screen } from '@testing-library/react';
import Header from '../components/Header';

beforeEach(() => {
  render(<Header />);
});

describe('Render Header', () => {
  test('renders icon roomIcon', () => {
    const icon = screen.getByTestId('roomIcon');
    expect(icon).toBeInTheDocument();
  });
  test('renders text Via Gustavo Modena 26, 20129 Milan, Italy', () => {
    const text = screen.getByText(/Via Gustavo Modena 26, 20129 Milan, Italy/i);
    expect(text).toBeInTheDocument();
  });
  test('renders icon callIcon', () => {
    const icon = screen.getByTestId('callIcon');
    expect(icon).toBeInTheDocument();
  });
  test('renders text Call Us Today', () => {
    const text = screen.getByText(/Call Us Today/i);
    expect(text).toBeInTheDocument();
  });
  test('renders text Italian', () => {
    const text = screen.getByText(/Italian/i);
    expect(text).toBeInTheDocument();
  });
  test('renders text Restaurant', () => {
    const text = screen.getByText(/Restaurant/i);
    expect(text).toBeInTheDocument();
  });
  test('renders text an elegant, fine dining experience', () => {
    const text = screen.getByText(/an elegant, fine dining experience/i);
    expect(text).toBeInTheDocument();
  });
});
