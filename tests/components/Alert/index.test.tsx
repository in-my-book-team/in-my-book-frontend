import { Alert } from '../../../src/components/Alert';
import { AlertType } from '../../../src/types';
import { AppState } from '../../../src/redux/rootReducer';
import React from 'react';
import { fixtures } from './fixtures';
import { render } from '../../helpers/wrapper';
import { screen } from '@testing-library/react';

describe('<Alert />', () => {
  it('should match snapshot', () => {
    const { container } = render(<Alert />, {
      reduxState: fixtures.state,
    });

    expect(container).toMatchSnapshot();
  });

  it('should show error alert', () => {
    render(<Alert />, {
      reduxState: {
        ...fixtures.state,
        alert: {
          ...fixtures.state.alert,
          type: AlertType.ERROR,
        },
      },
    });

    expect(screen.getByTestId(`alert-${AlertType.ERROR}`)).toBeInTheDocument();
    expect(
      screen.queryByTestId(`alert-${AlertType.SUCCESS}`),
    ).not.toBeInTheDocument();
  });

  it('should not show alert if state is empty', () => {
    render(<Alert />, {
      reduxState: {} as AppState,
    });

    expect(screen.queryByTestId(/alert-/)).not.toBeInTheDocument();
  });
});
