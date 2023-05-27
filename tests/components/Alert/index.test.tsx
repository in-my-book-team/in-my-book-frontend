import { Alert } from '../../../src/components/Alert';
import { AlertType } from '../../../src/types';
import React from 'react';
import { render } from '../../wrapper';

describe('<Alert />', () => {
  it('should match snapshot', () => {
    const { container } = render(<Alert />, {
      reduxState: {
        alert: {
          isOpen: true,
          message: '',
          type: AlertType.SUCCESS,
        },
      },
    });

    expect(container).toMatchSnapshot();
  });
});
