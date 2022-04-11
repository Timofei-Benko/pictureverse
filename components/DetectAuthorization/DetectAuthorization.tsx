import { useRouter } from 'next/router';
import { PropsWithChildren, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { setIsAuthenticated } from '../../redux/actionCreators';

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
    const isAuthenticated = !!Number(localStorage.getItem('isAuthenticated')) && !!(localStorage.getItem('userId'));

    if (!isAuthenticated && !GUEST_AVAILABLE_ROUTES.includes(router.pathname)) {
      router.push('/login');
    } else if (isAuthenticated) {
      dispatch(setIsAuthenticated(true));
    }
  }, [dispatch, router]);

  return <>{ children }</>;
};
