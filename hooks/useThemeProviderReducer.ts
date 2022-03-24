import { useReducer } from 'react';

interface IInitState {
  theme: string;
}

interface IAction {
  type: 'SET_THEME',
  payload: string,
}

export const initState = {
  theme: 'light',
}

export const useThemeProviderReducer = () => {
  const reducer = (state: IInitState = initState, action: IAction) => {
    switch (action.type) {
      case 'SET_THEME':
        return {
          ...state,
          theme: action.payload,
        }
    }
  }

  return useReducer(reducer, initState);
}
