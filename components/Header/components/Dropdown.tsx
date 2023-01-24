import Link from 'next/link';
import { useState } from 'react';
import { useRouter } from 'next/router';
import { useDispatch, useSelector } from 'react-redux';
import { config } from './config';
import { TRootState } from '../../../redux/store';
import { setUser } from '../../../redux/actionCreators';
import { routes } from '../../../constants/routes';

const ROUTES_WO_DROPDOWN = [
    routes.register,
    routes.login,
];

export const Dropdown = () => {
    const [isVisible, setIsVisible] = useState(false);
    const router = useRouter();
    const dispatch = useDispatch();
    const user = useSelector((state: TRootState) => state.user);

    const handleUsernameClick = () => setIsVisible(prev => !prev);

    const handleSignIn = () => router.push('/login');

    const handleSignOut = async () => {
        dispatch(setUser({
            ...user,
            isAuthenticated: false,
        }));
        localStorage.removeItem('user');
        await router.push(routes.login);
    };

    if (ROUTES_WO_DROPDOWN.includes(router.pathname)) return null;

    if (!user.isAuthenticated) return (
        <button
            className='relative z-10 ml-auto button'
            onClick={handleSignIn}
        >
            sign in
        </button>
    )

    return (
        <div className='relative ml-16'>
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
                                {name}
                            </button>
                        )
                    }
                })}
            </ul>
        </div>
    );
};
