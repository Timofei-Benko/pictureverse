import { useRouter } from 'next/router';
import cn from 'classnames';

import styles from './Header.module.sass';

export const Header = () => {
  const { pathname } = useRouter();
  const isNotLoginPage = pathname !== '/login' && pathname !== '/register';

  return (
    <div className={cn(
      styles.root,
      { [styles.regular]: isNotLoginPage }
      )}>
      <div className='pageContainer'>
        <div className={styles.inner}>
          <div className={styles.logoContainer}>
            <span className={styles.logo}>Pictureverse</span>
          </div>
        </div>
      </div>
    </div>
  )
}
