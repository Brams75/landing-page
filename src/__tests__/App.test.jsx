import React from 'react';
import { render, screen } from '@testing-library/react';
import App from '../App';

beforeEach(() => {
  render(<App />);
});

describe('Render App', () => {
  test('renders Header Component', () => {
    const component = screen.getByTestId('header');
    expect(component).toBeInTheDocument();
  });
  test('renders Banner Component', () => {
    const component = screen.getByTestId('banner');
    expect(component).toBeInTheDocument();
  });
});
