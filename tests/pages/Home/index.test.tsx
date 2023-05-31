import Home from '../../../src/pages/Home';
import React from 'react';
import { render } from '../../helpers/wrapper';

describe('<Home />', () => {
  it('should match snapshot', () => {
    const { container } = render(<Home />);

    expect(container).toMatchSnapshot();
  });
});
