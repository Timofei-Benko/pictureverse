import { FormEvent, InputHTMLAttributes, PropsWithChildren } from 'react';
import { ApolloError } from '@apollo/client';
import cn from 'classnames';

import styles from './Form.module.sass';

interface IFormProps {
  title: string;
  onSubmit: (e: FormEvent) => void;
  errorMessage: string | null;
}

export const Form = ({ title, onSubmit, children, errorMessage }: PropsWithChildren<IFormProps>) => {
  return (
    <div className={styles.wrap}>
      <form
        className={styles.form}
        onSubmit={onSubmit}
      >
        <h1 className={styles.title}>{title}</h1>
        <div className={styles.inputContainer}>
          {children}
        </div>
        <input
          className={styles.submit}
          type="submit"
          value='Submit'
        />
        {!!errorMessage && (
          <p className={styles.error}>
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
      className={styles.input}
      { ...props }
    />
  )
}

Form.Input = Input;
