import Home from '../../../src/components/App';
import React from 'react';
import { render } from '@testing-library/react';

describe('<App />', () => {
  it('should match snapshot', () => {
    const { container } = render(<Home />);

    expect(container).toMatchSnapshot();
  });
});
