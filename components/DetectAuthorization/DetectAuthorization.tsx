import React, { PropsWithChildren, useEffect } from 'react';
import { useRouter } from 'next/router';
import { useDispatch, useSelector } from 'react-redux';
import { setUser } from '../../redux/actionCreators';
import { routes } from '../../constants/routes';

const GUEST_AVAILABLE_ROUTES = [
  routes.login,
  routes.register,
  routes.feed,
  routes.home
]

export const DetectAuthorization: React.FC = ({ children }) => {
  const router = useRouter();
  const dispatch = useDispatch();

  useEffect(() => {
    const redirectToLogin = () => router.push('/login');
    const userJSON = localStorage.getItem('user');

    if (!userJSON && !GUEST_AVAILABLE_ROUTES.includes(router.pathname)) {
      redirectToLogin();
      return;
    }

    const user = JSON.parse(userJSON as string);
    dispatch(setUser({ ...user }));
  }, [dispatch, router]);

  return <>{ children }</>;
};
