import * as actions from '../actions';

export const setIsAuthenticated = (payload: boolean) => {
  return { type: actions.SET_IS_AUTHENTICATED, payload };
}
