import { routes } from '../../../constants/routes';

export const config = [
  {
    type: 'link',
    href: '/profile',
    name: 'profile',
  },
  {
    type: 'link',
    href: routes.settings,
    name: 'settings',
  },
  {
    type: 'button',
    name: 'sign out'
  }
];
