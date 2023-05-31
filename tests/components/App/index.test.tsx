import App from '../../../src/components/App';
import { AppState } from '../../../src/redux/rootReducer';
import React from 'react';
import { getReduxWrapper } from '../../helpers/wrapper';
import { render } from '@testing-library/react';

describe('<App />', () => {
  it('should match snapshot', () => {
    const { container } = render(<App />, {
      wrapper: getReduxWrapper({} as AppState),
    });

    expect(container).toMatchSnapshot();
  });
});
