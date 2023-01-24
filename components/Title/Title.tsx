import { FC } from 'react';

export const Title: FC = ({ children }) => {
    return (
        <h1 className='absolute top-[-25px] left-[20px] px-4 text-5xl lowercase bg-primary z-10
            after:content-[""] after:block after:absolute after:-z-10 after:top-1/2 after:left-3/4 after:w-8 after:h-4 after:bg-accent'
        >
           {children}
        </h1>
    );
};
