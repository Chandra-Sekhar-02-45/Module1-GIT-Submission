import { render, screen } from '@testing-library/react';
import App from './App';

// ... your tests start here


test('renders the main project title', () => {
  render(<App />);
  // This now looks for the correct ID
  const titleElement = screen.getByTestId('project-title');
  expect(titleElement).toBeInTheDocument();
});