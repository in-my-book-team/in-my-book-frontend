import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import Home from '../../../pages/Home';

it('renders welcome message', () => {
  render(<Home />);

  expect(screen.getByText('Home')).toBeInTheDocument();
});
