const SET_IS_AUTHENTICATED = 'SET_IS_AUTHENTICATED';
const SET_USER_INFORMATION = 'SET_USER_INFORMATION';

type TAction = {
  type: typeof SET_IS_AUTHENTICATED,
  payload: string,
} | {
  type: typeof SET_USER_INFORMATION,
  payload: string,
}

const initState = {
  isAuthenticated: false,
}

export const authenticationReducer = (state = initState, { type, payload }: TAction) => {
  switch (type) {
    case SET_IS_AUTHENTICATED: {
      return {
        ...state,
        isAuthenticated: payload,
      };
    }
    case SET_USER_INFORMATION: {

    }
    default:
      return state;
  }
};
