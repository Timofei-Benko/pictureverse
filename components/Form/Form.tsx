import { FormEvent, InputHTMLAttributes, PropsWithChildren } from 'react';

import styles from './Form.module.sass';

interface IFormProps {
  title: string;
  onSubmit: (e: FormEvent) => void;
  errorMessage: string | null;
}

export const Form = ({ title, onSubmit, children, errorMessage }: PropsWithChildren<IFormProps>) => {
  return (
    <div className='relative flex flex-col justify-center items-center h-full'>
      <form
        className='relative flex flex-col justify-between items-center min-h-[270px] p-7 border-3 border-secondary
          shadow-[0_18px_0px_-10px] shadow-secondary'
        onSubmit={onSubmit}
      >
        <h1 className='absolute top-[-25px] px-2 text-5xl uppercase bg-primary'>{title}</h1>
        <div className='relative self-center justify-self-center'>
          {children}
        </div>
        <input
          className='w-[200px] p-1 border-3 border-secondary h-12 text-2xl text-secondary uppercase bg-primary
            rounded-[30px] cursor-pointer transition-colors hover:bg-secondary hover:text-primary'
          type="submit"
          value='Submit'
        />
        {!!errorMessage && (
          <p className='absolute bottom-[90px] left-[27px] text-[1rem] text-red-500'>
            {errorMessage}
          </p>
        )}
      </form>
    </div>
  )
}

const Input = (props: InputHTMLAttributes<HTMLInputElement>) => {
  return (
    <input
      { ...props }
      className='h-12 w-full p-3 mb-5 last:mb-0 text-[1rem] bg-transparent border-3 border-secondary bg-none
        placeholder:text-[1rem] placeholder:text-secondary'
    />
  )
}

Form.Input = Input;
