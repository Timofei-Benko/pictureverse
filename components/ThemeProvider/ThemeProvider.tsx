import { PropsWithChildren, useEffect, useState } from 'react';

export const ThemeProvider = ({ children }: PropsWithChildren<{}>) => {
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

  return <>{children}</>;
};
