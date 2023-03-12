import { Header } from '../../../src/components/Header';
import React from 'react';
import { links } from './fixtures';
import { render } from '@testing-library/react';

describe('<Home />', () => {
  it('should match snapshot', () => {
    const { container } = render(
      <Header isAuthenticated={false} links={links} />,
    );

    expect(container).toMatchSnapshot();
  });
});
