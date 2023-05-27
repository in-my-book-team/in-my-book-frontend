import * as alertActions from '../../../../../src/redux/alert/actions';
import { AlertType } from '../../../../../src/types';

const state = {
  message: '',
  type: AlertType.SUCCESS,
  isOpen: false,
};

export const fixtures = {
  state,
  actions: {
    showAlert: {
      type: alertActions.showAlert.type,
      payload: {
        message: 'Test message',
        type: AlertType.SUCCESS,
      },
    },
    hideAlert: {
      type: alertActions.hideAlert.type,
    },
  },
};
