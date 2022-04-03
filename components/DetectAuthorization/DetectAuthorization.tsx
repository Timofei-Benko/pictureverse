import { useRouter } from 'next/router';
import { PropsWithChildren, useEffect } from 'react';
import { useDispatch } from 'react-redux';

const GUEST_AVAILABLE_ROUTES = [
  '/login',
  '/register',
  '/feed',
  '/'
]

export const DetectAuthorization = ({ children }: PropsWithChildren<{}>) => {
  const router = useRouter();
  const dispatch = useDispatch();

  useEffect(() => {
    const isAuthenticated = !!Number(localStorage.getItem('isAuthenticated'));
    console.log(router.pathname);

    if (!isAuthenticated && !GUEST_AVAILABLE_ROUTES.includes(router.pathname)) {
      router.push('/login');
    } else if (isAuthenticated) {
      dispatch({
        type: 'SET_IS_AUTHENTICATED',
        payload: true,
      });
    }
  }, []);

  return <>{ children }</>;
};
