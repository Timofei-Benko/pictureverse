import { PropsWithChildren } from 'react';
import { Header } from '../Header';

import styles from './AppLayout.module.sass';

export const AppLayout = ({ children }: PropsWithChildren<{}>) => {
  return (
    <div className={styles.root}>
      <Header />
      <div className='pageContainer'>
        <div className={styles.inner}>
          {children}
        </div>
      </div>
    </div>
  )
};
