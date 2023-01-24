import {FormEvent, InputHTMLAttributes, MouseEventHandler, PropsWithChildren} from 'react';
import Image from 'next/image';
import Link, { LinkProps } from 'next/link';
import { Title } from '../Title';
import {PrimaryButton} from '../PrimaryButton';

interface IFormProps {
    title: string;
    onSubmit: MouseEventHandler<HTMLButtonElement>;
    errorMessage: string | null;
}

export const Form = ({ title, onSubmit, children, errorMessage }: PropsWithChildren<IFormProps>) => {
    return (
        <div className='relative flex flex-col justify-center items-center h-full bg-primary'>
            <div
                className='relative flex flex-col justify-between items-center min-h-[600px] max-w-md px-7 pb-7 outlined'
            >
                <div className="relative h-full w-full">
                    <Image src="/fxdI.gif" alt="jane takes a polaroid" layout="fill" objectFit="contain" />
                </div>
                <Title>{title}</Title>
                <div className='relative self-center justify-self-center mb-5'>
                    {children}
                </div>
                <PrimaryButton onClick={onSubmit}>{title}</PrimaryButton>
                {!!errorMessage && (
                    <p className='absolute bottom-[115px] left-[27px] text-[1rem] text-red-500'>
                        {errorMessage}
                    </p>
                )}
            </div>
        </div>
    )
}

const Input = (props: InputHTMLAttributes<HTMLInputElement>) => {
    return (
        <input
            className='h-12 w-full p-3 mb-5 last:mb-0 text-[1rem] bg-transparent border-3 border-secondary bg-none
        placeholder:text-[1rem] placeholder:text-secondary'
            {...props}
        />
    )
}

const BottomLink = ({ children, ...rest }: LinkProps & { children: string }) => {
    return (
        <Link {...rest}>{children}</Link>
    )
}

Form.Input = Input;
Form.BottomLink = BottomLink;
