import React from 'react';
import { Header } from '../Header';

// TODO: refactor all project to 4 spaces, edit eslint config
export const AppLayout: React.FC = ({ children }) => {
    return (
        <div className='grid grid-rows-[auto_1fr] h-screen'>
            <Header />
            <div className='h-full w-full p-6'>
                {children}
            </div>
        </div>
    )
};
