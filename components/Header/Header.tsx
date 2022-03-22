import { useRouter } from 'next/router';
import cn from 'classnames';
import Logo from '../../assets/logo.svg';
import { Navigation } from './components';

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
          <div className={styles.logo}>
            <Logo />
          </div>
          <Navigation />
        </div>
      </div>
    </div>
  )
}
