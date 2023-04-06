import { Footer } from '../../../src/components/Footer';
import React from 'react';
import { render } from '../../wrapper';

describe('<Home />', () => {
  it('should match snapshot', () => {
    const { container } = render(<Footer />);

    expect(container).toMatchSnapshot();
  });
});
