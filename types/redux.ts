import { SET_USER } from '../redux/actions';

export interface IUser {
  isAuthenticated: boolean;
  userId: string | null;
  userName?: string | null;
}

export type TUserAction = {
  type: typeof SET_USER,
  payload: IUser,
};
