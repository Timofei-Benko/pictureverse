import { FC, MouseEventHandler } from 'react';

interface IPrimaryButtonProps {
    onClick: MouseEventHandler<HTMLButtonElement>;
}
export const PrimaryButton: FC<IPrimaryButtonProps> = ({ onClick, children }) => {
    return (
        <button
            className='transition linear duration-100 w-[200px] p-1 border-3 border-secondary h-12 text-2xl text-secondary uppercase bg-accent
             cursor-pointer self-start outlined active:translate-x-[5px] active:translate-y-[5px] active:shadow-none'
            type="submit"
            onClick={onClick}
        >
            {children}
        </button>
    );
};
