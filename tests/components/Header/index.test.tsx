import '@testing-library/jest-dom';
import { Header } from '../../../src/components/Header';
import React from 'react';
import { links } from './fixtures';
import { render } from '../../helpers/wrapper';
import { screen } from '@testing-library/react';

describe('<Header />', () => {
  it('should match snapshot', () => {
    const { container } = render(
      <Header isAuthenticated={false} links={links} />,
    );

    expect(container).toMatchSnapshot();
  });

  it('should show profile when user is authenticated', () => {
    render(<Header isAuthenticated={true} links={links} />);

    expect(screen.getByTestId('header-profile')).toBeInTheDocument();
  });

  it('should show registration container when is not authenticated', () => {
    render(<Header isAuthenticated={false} links={links} />);

    expect(screen.getByTestId('header-registration')).toBeInTheDocument();
  });
});
