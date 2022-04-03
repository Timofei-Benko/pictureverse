import Link from 'next/link';
import { useEffect, useState } from 'react';
import cn from 'classnames';
import { useRouter } from 'next/router';
import { useDispatch, useSelector } from 'react-redux';

import styles from './Dropdown.module.sass';
import { TRootState } from '../../../redux/store';

export const Dropdown = () => {
  const [isVisible, setIsVisible] = useState(false);
  const router = useRouter();
  const dispatch = useDispatch();
  const { isAuthenticated } = useSelector((state: TRootState) => state.authentication);

  const handleUsernameClick = () => setIsVisible(prev => !prev);
  const handleSignOut = async () => {
    dispatch({
      type: 'SET_IS_AUTHENTICATED',
      payload: false,
    });
    localStorage.setItem('isAuthenticated', '0');
    await router.push('/login');
  };

  if (!isAuthenticated) return null;

  return (
    <div className={styles.root}>
      <button className={styles.username} onClick={handleUsernameClick}>aboba</button>
      <ul className={cn(
        styles.dropdown,
        { [styles.visible]: isVisible }
      )}>
        <li className={styles.dropdownItem}>
          <Link href='/profile'>Profile</Link>
        </li>
        <li className={styles.dropdownItem}>
          <Link href='/settings'>Settings</Link>
        </li>
        <button className={styles.dropdownItem} onClick={handleSignOut}>
          Sign Out
        </button>
      </ul>
    </div>
  );
};
