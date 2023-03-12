import Home from '../../../src/pages/Home';
import React from 'react';
import { render } from '@testing-library/react';

describe('<Home />', () => {
  it('should match snapshot', () => {
    const { container } = render(<Home />);

    expect(container).toMatchSnapshot();
  });
});
