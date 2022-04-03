const SET_IS_AUTHENTICATED = 'SET_IS_AUTHENTICATED';

type TAction = {
  type: typeof SET_IS_AUTHENTICATED,
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
    default:
      return state;
  }
};
