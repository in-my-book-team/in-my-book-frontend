import { State } from './models/state';
import { createAction } from '@reduxjs/toolkit';

const ACTION_PARENT = 'alerts';

export const showAlert = createAction<{
  message: State['message'];
  type: State['type'];
  timeout?: State['timeout'];
}>(`${ACTION_PARENT}/showAlert`);

export const hideAlert = createAction(`${ACTION_PARENT}/hideAlert`);
