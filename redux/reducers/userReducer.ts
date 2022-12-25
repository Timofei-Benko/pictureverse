import { SET_USER } from '../actions';
import { IUser, TUserAction } from '../../types/redux';

const initState: IUser = {
  isAuthenticated: false,
  userId: null,
  userName: null,
}

export const userReducer = (state = initState, { type, payload }: TUserAction) => {
  switch (type) {
    case SET_USER: {
      return {
        ...state,
        isAuthenticated: payload.isAuthenticated,
        userId: payload.userId,
      };
    }
    default:
      return state;
  }
};
