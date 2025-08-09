import { render, screen } from '@testing-library/react';
import App from './App';

test('renders module 1 milestone title', () => {
  render(<App />);
  const titleElement = screen.getByText(/Module 1/i);
  expect(titleElement).toBeInTheDocument();
});