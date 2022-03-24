import { PropsWithChildren, createContext, useEffect, useState } from 'react';
import { initState } from '../../hooks/useThemeProviderReducer';

export const ThemeProvider = ({ children }: PropsWithChildren<{}>) => {
  const ThemeContext = createContext(initState);

  useEffect(() => {
    const theme = localStorage.getItem('theme');
    const body = document.querySelector('body');
    let themeColor: string;

    if (theme) {
      themeColor = theme;
    } else {
      localStorage.setItem('theme', 'light');
      themeColor = 'light';
    }

    body!.classList.add(themeColor);
  }, [])

  return (
    <ThemeContext.Provider value={initState}>
      {children}
    </ThemeContext.Provider>
  );
};
