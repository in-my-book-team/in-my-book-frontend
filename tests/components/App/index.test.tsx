import App from '../../../src/components/App';
import React from 'react';
import { render } from '@testing-library/react';

describe('<App />', () => {
  it('should match snapshot', () => {
    const { container } = render(<App />);

    expect(container).toMatchSnapshot();
  });
});
