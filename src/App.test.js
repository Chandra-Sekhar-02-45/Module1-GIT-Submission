import { render, screen } from '@testing-library/react';
import App from './App';

// in src/App.test.js

import { render, screen } from '@testing-library/react';
import App from './App';

test('renders the main project title', () => {
  render(<App />);
  // This now looks for the ID, not the text
  const titleElement = screen.getByTestId('Module1-GIT-Submission');
  expect(titleElement).toBeInTheDocument();
});
