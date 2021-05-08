/* eslint-disable linebreak-style */
import React from 'react';
import { render, screen, cleanup } from '@testing-library/react';
import App from '../App';

beforeEach(() => {
  render(<App />);
});

afterEach(cleanup);

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
