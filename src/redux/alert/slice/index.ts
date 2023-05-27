import { hideAlert, showAlert } from '../actions';
import { AlertType } from '../../../types';
import { State } from '../models/state';
import { createSlice } from '@reduxjs/toolkit';

export const initialState: State = {
  isOpen: false,
  message: '',
  type: AlertType.SUCCESS,
  timeout: undefined,
};

const slice = createSlice({
  name: 'alert',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(showAlert, (_state, action) => ({
        isOpen: true,
        type: action.payload.type,
        message: action.payload.message,
        timeout: action.payload.timeout,
      }))
      .addCase(hideAlert, (state) => ({
        ...state,
        isOpen: false,
      }));
  },
});

export default slice.reducer;
