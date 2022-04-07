import Link from 'next/link';
import { useState } from 'react';
import { useRouter } from 'next/router';
import { useDispatch, useSelector } from 'react-redux';
import { TRootState } from '../../../redux/store';
import { config } from './config';

const ROUTES_WO_DROPDOWN = [
  '/register',
  '/login'
];

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

  if (!isAuthenticated || ROUTES_WO_DROPDOWN.includes(router.pathname)) return null;

  return (
    <div className='relative ml-auto'>
      <button
        className='relative z-10 p-1 text-2xl text-secondary bg-primary border-none outline-none cursor-pointer'
        onClick={handleUsernameClick}
      >
        aboba
      </button>
      <ul className={
        `${isVisible ? 'block' : 'hidden'} absolute top-1/2 left-2/4 -translate-x-1/2 min-w-[150px] pt-8 px-4 pb-4 
        text-center bg-primary border-2 border-secondary`
      }>
        {config.map(({type, href, name}, i) => {
          if (type === 'link' && href) {
            return (
              <li
                key={i}
                className=
                  'p-0 text-2 whitespace-nowrap cursor-pointer hover:underline mb-4 last:mb-0'
              >
                <Link href={href}>{name}</Link>
              </li>
            );
          } else if (type === 'button') {
            return (
              <button
                key={i}
                className='p-0 text-2 bg-transparent border-none outline-none whitespace-nowrap cursor-pointer
                hover:underline mb-4 last:mb-0'
                onClick={handleSignOut}
              >
                Sign Out
              </button>
            )
          }
        })}
      </ul>
    </div>
  );
};
