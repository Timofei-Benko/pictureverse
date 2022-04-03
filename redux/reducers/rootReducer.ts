import { authenticationReducer } from './authenticationReducer';
import { combineReducers } from 'redux';

export const rootReducer = combineReducers({
  authentication: authenticationReducer,
})
