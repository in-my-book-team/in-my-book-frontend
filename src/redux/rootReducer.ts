import alertReducer from './alert/slice';
import { combineReducers } from '@reduxjs/toolkit';

const rootReducer = combineReducers({
  alert: alertReducer,
});

export type AppState = ReturnType<typeof rootReducer>;

export default rootReducer;
