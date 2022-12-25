import { SET_USER } from '../actions';
import { IUser } from '../../types/redux';

export const setUser = (payload: IUser) => {
  return { type: SET_USER, payload };
}
