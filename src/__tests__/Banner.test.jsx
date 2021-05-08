/* eslint-disable linebreak-style */
import React from 'react';
import { render, screen, cleanup } from '@testing-library/react';
import Banner from '../components/Banner';

beforeEach(() => {
  render(<Banner />);
});

afterEach(cleanup);

describe('Render Banner', () => {
  test('renders text Welcome to', () => {
    const text = screen.getByText(/Welcome to/i);
    expect(text).toBeInTheDocument();
  });
  test('renders text Italian Restaurant', () => {
    const text = screen.getByText('Italian Restaurant');
    expect(text).toBeInTheDocument();
  });
  test('renders text Make yourself at home', () => {
    const text = screen.getByText(/Make yourself at home/i);
    expect(text).toBeInTheDocument();
  });
  test('renders text BOOK A TABLE', () => {
    const text = screen.getByText(/BOOK A TABLE/i);
    expect(text).toBeInTheDocument();
  });
  test('renders text REQUEST BOOKING', () => {
    const text = screen.getByText(/REQUEST BOOKING/i);
    expect(text).toBeInTheDocument();
  });
});
